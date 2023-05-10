import { useState } from 'react'
import Link from 'next/link'
import Seo from '../../components/seo';
import { fetchAPI } from "../../lib/api";
import type { AppProps } from 'next/app';
import TrendingItems from '../../components/TrendingItems';
const Home = ({ products, articles, homepage }: any) => {
  const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <div className="bg-white">
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-white lg:text-4xl">ハイクオリティキーボードで<br />普段の作業を快適に</h1>
            <p className="mt-4 text-lg text-white">
              <span className='underline decoration-amber-400'>効率的なタイピング</span>は、作業のモチベーションを高め、成果を上げるために欠かせません。<br />
              さあ、<span className='bg-indigo-500 font-bold'>最高のパフォーマンス</span>を発揮しましょう。
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              キーボード一覧はこちら→
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
      <>
        <div className="grid min-h-screen grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 bg-gray-50">
          <div className="relative flex">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12  w-full">
              <h2 className="text-lg font-medium text-white text-opacity-75">フルセット キーボード</h2>
              <p className="mt-1 text-2xl text-white font-medium">届いてすぐに使えるオリジナルキーボード</p>
              <a
                href="#"
                className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                商品を探す &rarr;
              </a>
            </div>
          </div>
          <div className="relative flex">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12 w-full">
              <h2 className="text-lg font-medium text-white text-opacity-75">カスタマイズ パーツ</h2>
              <p className="mt-1 text-2xl text-white font-medium">キーボードを更にカスタマイズする</p>
              <a
                href="#"
                className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                商品を探す &rarr;
              </a>
            </div>
          </div>
        </div>
      </>
      <TrendingItems products={products} />
      {/* <div>
        使い方（サイト・商品）
      </div>
      <div>
        お客様の声
      </div> */}
    </>
  )
}
export async function getStaticProps() {
  // Run API calls in parallel
  const [productRes, articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/products", { populate: "*" }),
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
  ]);

  return {
    props: {
      products: productRes.data,
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
