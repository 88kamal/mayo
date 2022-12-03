import React from 'react'
import '../App.css'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
export default function Faqs() {
  return (
    <div className='bg-[#990000] p-5'>
       
      <div className="w-full px-4"><div className='  '>
                <h1 className=' font-bold text-3xl  text-white  mx-[6px]'>FAQ</h1>
            </div>
        <div className="mx-auto w-full rounded-2xl  p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>When did school start?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                The school started on the 1st of August 1987.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Which Board does the school follow?
</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
       
        </div>
      </div>
    </div>
  )
}
