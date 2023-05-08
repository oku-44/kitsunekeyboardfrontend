import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  return (
    <div className="relative bg-gray-50 px-4 pt-8 pb-8 sm:px-6 lg:px-8 lg:pt-8 lg:pb-8">
      <div className="absolute inset-0">
        {/* <div className="h-1/3 bg-white sm:h-2/3" /> */}
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            記事一覧
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
          {articles.map((article, i) => {
            return <Card article={article} key={article.attributes.slug} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
