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
                  <span>Is Mayo College girls school good?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-white bg-[#FFA700] ">
                Mayo College Girls School is ranked as one of the top girls boarding school in India. The school is well known for providing a warm, comfortable, and safe environment for students. 

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>How can I get admission in Mayo girls college?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                <h1 className=" font-bold">In order to get admission in Mayo girls college, one needs to follow the following steps:</h1>
                <ul className="list-decimal mx-8">
                  <li>Fill out a registration form.</li>
                  <li>Document verification will decide if you are eligible or not.</li>
                  <li>You will have to take an aptitude test, usually held in the 3rd week of November.</li>
                  <li>Upon passing the test, you will be accepted into the school.</li>
                </ul>

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is the fees structure of Mayo College Girls School, Ajmer?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                <h1 className=" font-bold">Given below is the fees structure of Mayo College Girls School, Ajmer</h1>
                <ul className="list-decimal mx-8">
                  <li>For Indian- Rs.8,01,000</li>
                  <li>For Overseas- Rs. 16,02,000</li>
                </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Why Mayo Girls school is considered the best girls boarding school in India?

                  </span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                Mayo Girls School is one of the best girls boarding school in India offering great education since 1987. <br/> This top girls residential school in India focuses on providing quality education and our focus is to make all students academically, physically and financially fit for the future.

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What celebrities studied in Mayo College?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white bg-[#FFA700] ">
                <h1 className=" font-bold">Here are some of the most noteworthy alumnae who studied in Mayo College Girls school:</h1>
                <ul className="list-decimal mx-8">
                  <li>Princess Shruti: The Royal Highness of Nepal
</li>
                  <li>Vedita Pratap Singh: Famous Bollywood Actress</li>
                  <li>Chhavi Rajawat: India's Youngest Sarpanch</li>
                  <li>Harshi Agarwal: Founder of Brushes N Strokes</li>
                </ul>

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

        </div>
      </div>
    </div>
  )
}
