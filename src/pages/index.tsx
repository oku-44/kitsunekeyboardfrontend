import { useState } from 'react'
import Link from 'next/link'
import Seo from '../../components/Seo';
import { fetchAPI } from "../../lib/api";
import type { AppProps } from 'next/app';
import TrendingItems from '../../components/TrendingItems';
import { StarIcon } from '@heroicons/react/20/solid'
import { NextPage } from 'next';

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
    <p>まだレビューがありません...。<br />いつでも素敵なレビューをお待ちしてます。</p>
    `,
    date: '2023/05/11',
    datetime: '2023-05-11',
    author: 'I AM きつね',
    avatarSrc:
      '/kitsune.svg',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>まだレビューがありません...。<br />きっとあなたが初レビュワーです。</p>
    `,
    date: '2023/05/11',
    datetime: '2023-05-11',
    author: 'I AM きつね',
    avatarSrc:
      '/kitsune.svg',
  },
  // More reviews...
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = ({ products, articles, homepage }: any) => {
  const features = [
    { name: 'Origin', description: 'きつねキーボードなどの小さなメーカー、cherry、logicoolなどの大手メーカーによるデザイン' },
    { name: 'Case', description: '仕事からゲームまで、あなたの利用シーンに合った商品' },
    { name: 'No Registration', description: '会員登録不要で簡単購入' },
    { name: 'Lineup', description: 'キーボード本体でも、パーツ毎でも、好きなように注文' },
    { name: 'Pay', description: '支払いは簡単。クレジットカード決済・Apple Pay・Google Pay・コンビニ後払い決済サービスが利用可能' },
    { name: 'Shipping', description: '送料込み、2~3営業日でスピード発送（在庫状況による）' },
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">きつねキーボードの特徴</h2>
            <p className="mt-4 text-gray-500">
              きつねキーボードは<span className='text-amber-500'>高い品質</span>と<span className='text-amber-500'>豊富なラインナップ</span>で、ゲーマーやエンジニアをはじめとして様々な方にご利用いただいております。
              オリジナル商品から大手メーカーの商品まで、あなたのニーズに合った商品をお選びいただけます。
              <span className=' text-amber-500'> Apple Pay</span>や<span className='text-amber-500'>Google Pay</span>が利用でき、面倒な住所やカードの入力も不要。
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
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

      <div className="bg-white pt-24">
        <div className='py-8 lg:mx-auto lg:max-w-7xl px-4 lg:px-8'>
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">ユーザーからのレビュー</h2>
          <div className="my-0">
            {reviews.map((review, reviewIdx) => (
              <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                <div className="flex-none py-10">
                  <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                </div>
                <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
