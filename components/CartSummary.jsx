import { useShoppingCart } from "use-shopping-cart"
import Link from "next/link"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function CartSummary() {
  const cart = useShoppingCart()
  const {  clearCart, formattedTotalPrice } = cart
  return(
    <section
    aria-labelledby="summary-heading"
    className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
      料金
    </h2>

    <dl className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <dt className="text-sm text-gray-600">小計</dt>
        <dd className="text-sm font-medium text-gray-900">{formattedTotalPrice}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="flex items-center text-sm text-gray-600">
          <span>送料</span>

        </dt>
        {/* <dd className="text-sm font-medium text-gray-900">{formatCurrencyString({ value: cartCount * 500, currency: 'JPY' })}</dd> */}
        <dd className="text-sm font-medium text-gray-900">¥0</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="text-base font-medium text-gray-900">合計</dt>
        <dd className="text-base font-medium text-gray-900">{formattedTotalPrice}</dd>
      </div>
    </dl>
    <div className="mt-6">
      <Link
      href={'checkout'}>
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </Link>
      <div className='w-full flex justify-center'>
        <button onClick={() => clearCart()} type="button" className="mt-3 p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Remove</span>
          <div className='flex border-b'>
            <TrashIcon className="h-5 w-5" aria-hidden="true" />
            <p className='h-5'>カートを空にする</p>
          </div>
        </button>
      </div>
    </div>
  </section>
  )
}