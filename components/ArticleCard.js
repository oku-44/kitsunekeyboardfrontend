import React from "react";
import Moment from "react-moment";
import Link from "next/link";
import Image from "next/dist/client/image";
import { getStrapiMedia } from "../lib/media";

function ArticleCard({ article }) {
  console.log(article)
  return (
    <>
      <Link  href={`/article/${article.attributes.slug}`} passHref>
        <article
          key={article.attributes.id}
          className="flex flex-col items-start justify-between"
        >
          <div className="relative w-full">
            <img
              src={getStrapiMedia(article.attributes.image.data.attributes.url)}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="max-w-xl w-full">
            <div className="group relative w-max">
              <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{article.attributes.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {article.attributes.description}
              </p>
              <div className="mt-2 flex items-center gap-x-4 text-xs">

              {/* <a
                href={article.attributes.category}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {article.attributes.category}
              </a> */}
            </div>
            </div>
            <div className="relative mt-1 w-full flex items-center gap-x-4">
              <img
                src={getStrapiMedia(article.attributes.author.data.attributes.picture.data.attributes.url)}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
              <div className="text-sm grid w-full leading-6">
                <div className="w-ful flex justify-end">
                  <Moment
                  format="YYYY-MM-DD"
                  className="flex space-x-1 text-sm text-gray-500"
                >
                  {article.attributes.published_at}
                </Moment>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default ArticleCard;