import { useState } from 'react'


export default function Home() {
  return (
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
          <h1 className="text-2xl font-bold tracking-tight text-white lg:text-4xl">ハイクオリティキーボードで<br/>普段の作業を快適に</h1>
          <p className="mt-4 text-lg text-white">
          <span className='underline decoration-amber-400'>効率的なタイピング</span>は、作業のモチベーションを高め、成果を上げるために欠かせません。<br />
          さあ、<span className='bg-indigo-500 font-bold'>最高のパフォーマンス</span>を発揮しましょう。
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            キーボード一覧はこちら→
          </a>
        </div>
      </div>
    </div>
    )
}
