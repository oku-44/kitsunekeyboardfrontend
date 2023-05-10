import React from "react"
import Moment from "react-moment"
import Link from "next/link"
import Image from "next/dist/client/image"

export default function Card({ article }) {
  return (
    <Link href={`/article/${article.attributes.slug}`} passHref>
      <div
        key={article.attributes.title}
        className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-indigo-200"
      >
        <a>
          <div className="">
            {/* <NextImage image={article.attributes.image} /> */}
          </div>
        </a>
        <div className="flex flex-1 flex-col justify-between bg-white py-1 px-3">
          <div className="flex-1">
            {/* <Link
              href={`/category/${article.attributes.category.data.attributes.slug}`}
              passHref
            >
              <p className="text-sm font-medium text-indigo-600">
                <a>{article.attributes.category.data.attributes.name}</a>
              </p>
            </Link> */}
            <a className="mt-1 block">
              <p className="text-xl font-semibold text-gray-900">
                {article.attributes.title}
              </p>
              <p className="mt-2 text-base text-gray-500">
                {article.attributes.description}
              </p>
            </a>
          </div>
          <div className="mt-3 flex items-center">
            <div className="flex-shrink-0">
              <a>
                <span className="sr-only">
                  {/* {article.attributes.author.data.attributes.name} */}
                </span>
                {/* <NextImage className="h-10 w-10 rounded-full" image={article.attributes.author.data.attributes.picture} /> */}
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {/* {article.attributes.author.data.attributes.name} */}
              </p>
              <Moment
                format="MMM Do YYYY"
                className="flex space-x-1 text-sm text-gray-500"
              >
                {article.attributes.published_at}
              </Moment>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
