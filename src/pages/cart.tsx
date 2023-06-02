import React from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon, TrashIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import CartSummary from '../../components/CartSummary'
import {
  // Product,
  CartEntry as ICartEntry
} from 'use-shopping-cart/core'
import {
  useShoppingCart,
  CartActions,
  DebugCart,
  formatCurrencyString
} from 'use-shopping-cart'
import { getStrapiURL } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'



interface Detail {
	name: string;
	items: string[];
  }
  
  interface Attribute {
	category: string;
	name: string;
	available_color: string[];
	available_axis: string[];
  availableQty: number;
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



function CartEntry({
  entry,
  removeItem,
  setItemQuantity
}: {
  entry: ICartEntry
  removeItem: CartActions['removeItem']
  setItemQuantity: CartActions['setItemQuantity']
}) {
  return (
    <li key={entry.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={entry.imageUrl &&getStrapiMedia(entry.imageUrl)}
          alt={entry.imageAlt}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a href={entry.href} className="font-medium text-gray-700 hover:text-gray-800">
                  {entry.name}
                </a>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{entry.color}</p>
              {entry.size ? (
                <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{entry.size}</p>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">1つの価格:¥{entry.price}</p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${entry.id}`} className="sr-only">
              Quantity, {entry.name}
            </label>
            <select
              id={`quantity-${entry.id}`}
              name={`quantity-${entry.id}`}
              defaultValue={entry.quantity}
              className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              onChange={(event) => {
                setItemQuantity(entry.id, parseInt(event.target.value, 10))
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={8}>9</option>
              <option value={8}>10</option>
              <option value={8}>11</option>
              <option value={8}>12</option>
              <option value={8}>13</option>
              <option value={8}>14</option>
              <option value={8}>15</option>
            </select>
            <div className="absolute top-0 right-0">
              <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Remove</span>
                <XMarkIcon onClick={() => removeItem(entry.id)} className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        {/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {entry.availableQty ? (
            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
          ) : (
            <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
          )}
          <span>{entry.availableQty ? '在庫あり' : `在庫なし、完成まで1ヶ月程度時間がかかる可能性あり`}</span>
        </p> */}
      </div>
    </li>
  )
}


const Cart = () => {
  const cart = useShoppingCart()
  const { removeItem, setItemQuantity, cartDetails, cartCount = 0 } = cart
  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} setItemQuantity={setItemQuantity} />
    ))
  return (
        <div className="bg-white">
          {/* <button onClick={() => {console.log(cartDetails)}}>console.log(cartDetails)</button> */}
            {/* <DebugCart /> */}
        <div className="mx-auto max-w-2xl px-4 pt-8 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">ショッピングカート</h1>

          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
                {cartEntries.length > 0 ? (
                  <>
                  <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                    {cartEntries}
                    </ul>
                  </>
                ) : null}
            </section>
            {/* Order summary */}
            {cartEntries.length === 0 ? null : <CartSummary />}
          </form>
          {cartEntries.length === 0 ? <p className='flex justify-center'>商品はまだ追加されていないようです...</p> : null}
        </div>

      </div>
  )
}


export default Cart

