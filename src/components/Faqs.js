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
                  <span> Which Board does the school follow?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  The CISCE and CAIE (Cambridge) boards are linked with the all-girls boarding school.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is the teacher-student ratio in school?

                  </span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  The teacher-student ratio is 1:25.

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between my-2  bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is the process of admission?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FFA700] ">
                  The lowest grade is Class IV, and your child may take the Common Aptitude Analysis after passing Class III. For those requesting admission to class IX, the Common Aptitude Analysis is required.
                  For admittance into Class XI, admission is based on Class X results from the Board. Students with test scores below 90% are rarely accepted; admission is based on merit and space availability.
                  The Common Aptitude Analysis scores are employed to determine entrance to Mayo College. The Education Committee, which has Board members and the Principal, makes the final decision about admissions.

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

        </div>
      </div>
    </div>
  )
}
