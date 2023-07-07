import React, { AriaAttributes } from "react";
import Moment from "react-moment";
import Link from "next/link";
import Image from "next/dist/client/image";
import { getStrapiMedia } from "../lib/media";
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


export default function ArticleCard({ article }: {article: Article}): JSX.Element{
  return (
    <>
      <Link  href={`/article/${article.attributes.slug}`} passHref>
        <article
          key={article.attributes.slug}
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
              <p className="whitespace-normal mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {article.attributes.description}
              </p>
            </div>
            <div className="relative mt-1 w-full flex items-center gap-x-4">
            <div className="text-sm grid w-full leading-6">
              <div className="w-ful flex items-center justify-start my-2">
                <img
                  src={getStrapiMedia(article.attributes.author.data && article.attributes.author.data.attributes.picture.data.attributes.url)}
                  alt={article.attributes.author.data.attributes.name}
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
                <div>
                  <p className="ml-2 text-lg text-gray-600">
                    {article.attributes.author.data.attributes.name}
                  </p>
                </div>
              </div>
            </div>
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

