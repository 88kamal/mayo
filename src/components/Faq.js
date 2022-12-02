import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Faq() {
    return (
        <div className="bg-[#990000] p-5">
            <div className=' container mx-auto '>
                <h1 className=' font-bold text-3xl text-center'>FAQ</h1>
            </div>
            <div className="w-full">
                <div className="mx-auto w-full max-w-[44rem] rounded-2xl  p-2">
                <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[50em] bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[50em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[50em] bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[50em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[50em] bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[50em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[50em] bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[50em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[50em] bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[50em] text-white bg-[#FBAB14]">
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
