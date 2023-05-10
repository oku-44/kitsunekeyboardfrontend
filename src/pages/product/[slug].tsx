import React from 'react'
import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { CartActions } from 'use-shopping-cart'
import { fetchAPI } from '../../../lib/api';
import {
	useShoppingCart,
	DebugCart,
	formatCurrencyString
  } from 'use-shopping-cart'
import Seo from '../../../components/Seo'
// import { Product } from 'use-shopping-cart/core'

interface Params {
	params: { slug: string }
}
interface Detail {
	name: string;
	items: string[];
  }
  
  interface Attribute {
	category: string;
	name: string;
	available_color: string[];
	available_axis: string[];
	price: number;
	description: string;
	slug: string;
	image: {
	  data: {
		id:number,
		attributes: {
		  name: string;
		};
	  }[];
	};
	details: Detail[];
  }
  
  interface Product {
	attributes: Attribute;
  }
  interface ProductProps {
	product: Product;
  }

function classNames(...classes: (string | undefined)[]): string {
	return classes.filter(Boolean).join(' ');
}
  
const Slug = ({product}: ProductProps) => {
	const cart = useShoppingCart()
	const { addItem } = cart
	const router = useRouter();
	const seo = {
		metaTitle: product.attributes.name,
		metaDescription: product.attributes.description,
		shareImage: product.attributes.image,
		product: true,
	  }
	  
	return (
		<>
		<Seo seo={seo} />
			<div className="bg-white">
				<div className="mx-auto max-w-2xl py-8 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						{/* Image gallery */}
						<Tab.Group as="div" className="flex flex-col-reverse">
						{/* Image selector */}
						<div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
						<Tab.List className="grid grid-cols-4 gap-2 sm:gap-6">
							{product.attributes.image.data.map((image) => (
							<Tab
								key={image.id}
								className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
							>
								{({ selected }) => (
								<>
									<span className="sr-only"> {product.attributes.image.data[0].attributes.name} </span>
									<span className="absolute inset-0 overflow-hidden rounded-md">
									<img src={'/' + image.attributes.name} alt="" className="h-full w-full object-cover object-center" />
									</span>
									<span
									className={classNames(
										selected ? 'ring-indigo-500' : 'ring-transparent',
										'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
									)}
									aria-hidden="true"
									/>
								</>
								)}
							</Tab>
							))}
						</Tab.List>
						</div>

						<Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
						{product.attributes.image.data.map((image) => (
							<Tab.Panel key={image.id}>
							<img
								src={'/' + image.attributes.name}
								alt={image.attributes.name}
								className="h-full w-full object-cover object-center sm:rounded-lg"
							/>
							</Tab.Panel>
						))}
						</Tab.Panels>
					</Tab.Group>

						{/* Product info */}
						<div className="mt-10 md:px-3 sm:mt-16 sm:px-0 lg:mt-0">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.attributes.name}</h1>

							<div className="mt-3">
								<h2 className="sr-only">Product information</h2>
								<p className="text-3xl tracking-tight text-gray-900">{product.attributes.price.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'})}</p>
							</div>
							<div className="mt-6">
								<h3 className="sr-only">Description</h3>

								<div
									className="space-y-6 text-base text-gray-700"
									dangerouslySetInnerHTML={{ __html: product.attributes.description }}
								/>
							</div>

								{/* Colors */}
								<div>

								</div>
								<div className="sm:flex-col1 mt-5 flex flex-1 justify-end ">
									<button
										onClick={() => addItem({
											id: product.attributes.slug,
											price: product.attributes.price,
											name: product.attributes.name,
											description: product.attributes.description,
											image: product.attributes.image.data[0].attributes.name,
											sku: product.attributes.slug,
											currency: 'jpy'
										})}
										type="button"
										className="mr-2 text-sm font-semibold hover:underline underline-offset-2 focus-visible:outline text-indigo-500 w-1/3"
									>
										カートに追加
									</button>
									<button
										onClick={()=>router.push('/checkout')}
										type="button"
										className="max-w-xs mr-2 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-1/3 min-w-[120px]"
										>
										購入
									</button>
								</div>
							<section aria-labelledby="details-heading" className="mt-12">
								<h2 id="details-heading" className="sr-only">
									Additional details
								</h2>
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

// export async function getServerSideProps(context: any) {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?filters[slug]=` + context.query.slug + "&populate=*")
// 	const product = await res.json()
// 	return {
// 	  props: { product: product.data[0] },
// 	}
// }

export async function getStaticPaths() {
	const productsRes = await fetchAPI("/products", { fields: ["slug"] })
  
	return {
	  paths: productsRes.data.map((product:Product) => ({
		params: {
		  slug: product.attributes.slug,
		},
	  })),
	  fallback: false,
	}
}
  
export async function getStaticProps({ params }: Params) {
	const productsRes = await fetchAPI("/products", {
	filters: {
		slug: params.slug,
	},
	populate: "*",
	})

	return {
	props: { product: productsRes.data[0] },
	revalidate: 1,
	}
}
export default Slug