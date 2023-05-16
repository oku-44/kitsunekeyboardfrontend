import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../../lib/api";
import Seo from "../../../components/Seo";
import { getStrapiMedia } from "../../../lib/media";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  // console.log(article.attributes.content)
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
          {/* <div className="py-6 lg:py-8">
            <NextImage image={article.attributes.image} />
          </div> */}
          <div className="markdown">
            <ReactMarkdown allowDangerousHtml={true}>
              {article.attributes.content}
            </ReactMarkdown>
            <hr />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.attributes.author.picture && (
                  <img
                    src={
                      article.attributes.author.pictures &&
                      getStrapiURL(article.attributes.author.picture)
                    }
                    alt={article.attributes.name}
                    className=""
                  />
                )}
              </div>
              <div className="">
                <p className="">
                  By {article.attributes.author.data.attributes.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="YYYY-MM-DD">
                    {article.attributes.published_at}
                  </Moment>
                </p>
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
    populate: "*",
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;
