import Link from 'next/link'
import React from 'react'
import {
	useShoppingCart,
} from 'use-shopping-cart'
import {
	CartActions,
	CartEntry as ICartEntry
} from 'use-shopping-cart/core'
import Seo from "../../components/Seo"

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
			id: number,
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
interface ProductsProps {
	products: {
		data: Product[];
	}
}

const Products = ({ products }: ProductsProps) => {
	const cart = useShoppingCart()
	const { addItem } = cart
	const seo = {
		metaTitle: '商品一覧',
		metaDescription: '商品一覧',
	}

	return (
		<>
			<Seo seo={seo} />
			<div className="bg-white">
				<div className="py-8 lg:mx-auto lg:max-w-7xl lg:px-8">
					<div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
						<Link href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
							See everything
							<span aria-hidden="true"> &rarr;</span>
						</Link>
					</div>

					<div className="relative mt-8">
						<div className="relative -mb-6 w-full overflow-x-auto pb-6">
							<ul
								role="list"
								className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
							>
								{products.data.map((product: Product) => (
									<li key={product.attributes.slug} className="inline-flex w-64 flex-col lg:w-auto">
										<div className="group relative grid">
											<Link href={`/product/${product.attributes.slug}`}>
												<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
													<img
														src={product.attributes.image.data[0].attributes && product.attributes.image.data[0].attributes.name}
														alt={product.attributes.name}
														className="h-full w-full object-cover object-center group-hover:opacity-75"
													/>
													<h4 className='sr-only'>available color</h4>
													<ul role="list" className="mt-auto flex items-end justify-end space-x-3 pb-1 pr-2">
														{product.attributes.available_color.map((color) => (
															<li
																key={color}
																className={"h-5 w-5 rounded-full border border-black border-opacity-10"}
																style={{ backgroundColor: color.toLowerCase() }}
															>
																<span className="sr-only">{color}</span>
															</li>
														))}
													</ul>
												</div>
											</Link>
											<div className="mt-4">
												<h3 className="grid mt-1 font-semibold text-gray-900 group-hover:text-indigo-500">
													<Link href={`/product/${product.attributes.slug}`}>
														<span className="absolute" />
														{product.attributes.name}
													</Link>
													<p className="mt-1 justify-self-end text-gray-900">{product.attributes.price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}</p>
												</h3>
											</div>
											<h4 className='sr-only'></h4>
											<p className='text-gray-500'>{product.attributes.description.length > 60 ? `${product.attributes.description.slice(0, 60)}...` : product.attributes.description}</p>
											<div className='flex justify-end'>
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
													className="justify-self-end mt-3 py-1 px-2 text-sm font-semibold hover:underline underline-offset-2 focus-visible:outline text-indigo-500"
												>
													カートに追加
												</button>
												<Link href='/checkout'>
												<button
													type="button"
													className="rounded bg-indigo-600 justify-self-end mt-3 ml-4 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
												>
													購入する
												</button>
											</Link>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-12 flex px-4 sm:hidden justify-end">
						<Link href="/products" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
							See everything
							<span aria-hidden="true"> &rarr;</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(context: any) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`)
	const products = await res.json()
	return {
		props: { products: products },
	}
}

export default Products
