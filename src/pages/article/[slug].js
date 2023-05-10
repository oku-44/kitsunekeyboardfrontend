import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../../lib/api"
import Seo from "../../../components/seo"
import { getStrapiMedia } from "../../../lib/media"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <>
      <Seo seo={seo} />
      <div className="bg-gray-50 mx-auto p-6 lg:p-8">
        <div className="mx-auto max-w-3s sm:w-1/2">
          <h1 className="text-2xl my-1">{article.attributes.title}</h1>
          <ul className="flex justify-end">
            <li>
              <CalendarDaysIcon className="block h-6 w-6" />
            </li>
            <li>
              <Moment format="YYYY-MM-DD" className="pl-2 text-gray-500">
                {article.attributes.published_at}
              </Moment>
            </li>
          </ul>
          {/* <div className="py-6 lg:py-8">
            <NextImage image={article.attributes.image} />
          </div> */}
          <div className="">
            <ReactMarkdown
              source={article.attributes.content}
              escapeHtml={false}
            />
            <hr />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              {/* <div>
                {article.attributes.author.picture && (
                  <NextImage image={article.attributes.author.picture} />
                )}
              </div> */}
              <div className="uk-width-expand">
                {/* <p className="uk-margin-remove-bottom">
                  By {article.attributes.author.data.attributes.name}
                </p> */}
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">
                    {article.attributes.published_at}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  }
}

export default Article
