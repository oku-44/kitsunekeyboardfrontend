import React from "react"
import ArticleCard from "../../components/ArticleCard"
import { fetchAPI } from "../../lib/api"
import Seo from "../../components/Seo"
import { NextPage } from "next"
type Article = {
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    published_at: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          picture: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
          name: string;
        };
      };
    };
  };
};

type ArticlesProps = {
	articles: {
		data: Article[];
	}
}
const Articles: NextPage<ArticlesProps>  = ({ articles }) => {
  const seo = {
    metaTitle: "記事一覧",
    metaDescription: "All articles",
  }
  return (
    <>
      <Seo seo={seo} />
      <div className="relative bg-gray-50 px-4 pt-8 pb-8 sm:px-6 lg:px-8 lg:pt-8 lg:pb-8">
        <div className="relative mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              記事一覧
            </h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
            {articles.data.map((article) => {
              return <ArticleCard article={article} key={article.attributes.slug} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ articlesRes ] = await Promise.all([
    fetchAPI("/articles", { populate: ["image",  "author.picture"] }),
  ]);
  return {
    props: {
      articles: articlesRes,
    },
    revalidate: 1,
  };
}

export default Articles
