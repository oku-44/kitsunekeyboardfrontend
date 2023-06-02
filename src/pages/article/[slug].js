import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../../lib/api";
import Seo from "../../../components/Seo";
import { getStrapiMedia } from "../../../lib/media";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const Article = ({ article }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  return (
    <>
      <Seo seo={seo} />
      <div className="bg-gray-50 mx-auto p-6 lg:p-8 text-gray-500">
        <div className="mx-auto max-w-3s sm:w-2/3">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {article.attributes.title}
          </h1>
          <ul className="flex items-center justify-end">
            <li>
              <CalendarDaysIcon className="block h-5 w-5" />
            </li>
            <li>
              <Moment format="YYYY-MM-DD" className="text-sm pl-1">
                {article.attributes.published_at}
              </Moment>
            </li>
          </ul>
          <div className="py-6 lg:py-8">
            <img
              src={getStrapiMedia(article.attributes.image.data.attributes.url)}
              className="w-full aspect-4"
             />
          </div>
          <div className="markdown">
            <ReactMarkdown allowDangerousHtml={true}>
              {article.attributes.content}
            </ReactMarkdown>
            <hr />
            <div className="relative mt-1 w-full flex items-center justify-end gap-x-4">

              <div className="text-sm grid w-full leading-6">
                <div className="w-ful flex justify-end my-2">
                  <img
                    src={article.attributes.author.data.attributes && getStrapiMedia(article.attributes.author.data.attributes.picture.data.attributes.url)}
                    alt=""
                    className="h-10 w-10 items-center rounded-full bg-gray-100 mx-4"
                  />
                  <div>
                    <p>
                      この記事を書いた人
                    </p>
                    <p>
                      {article.attributes.author.data.attributes.name}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image",  "author.picture"],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;
