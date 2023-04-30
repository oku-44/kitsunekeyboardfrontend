import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, MagnifyingGlassIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type CartItemType = [string, number, number];

type NavBarProps = {
  cart: CartItemType[];
};
const navigation = [
  { name: '商品を探す', href: '/products', icon:<MagnifyingGlassIcon className="h-5 w-5"/> },
  { name: 'トレンド情報', href: '/about', icon:<DocumentTextIcon className="h-5 w-5"/> },
  { name: 'カート', href: '/cart', icon:<ShoppingCartIcon className="h-5 w-5"/>},
]

export default function NavBar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm shadow-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between pt-4 pb-2 px-4 md:px-10" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link href="/"  className="flex items-center -m-1.5 p-1.5">
            <Image src="/kitsune.svg" alt="My Image" width={44} height={44} />
            <span className='text-2xl text-gray-600'>きつねキーボード</span>
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-500 hover:text-indigo-500 hover:decoration-indigo-500"
          >
            <div className='flex flex-col items-center justify-center'>
              {item.icon}
              <span className='underline decoration-amber-400 hover:decoration-indigo-500'>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image src="/kitsune.svg" alt="My Image" width={44} height={44} />
              <span className="sr-only">Your Company</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className='flex'>
                      {item.icon}
                      <span className='underline decoration-amber-400'>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
