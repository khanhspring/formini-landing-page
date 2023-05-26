import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react"

type Props = {

}

const PricingTable: FC<Props> = ({ }) => {
    return (
        <section className="w-full mt-14" id="pricing">
            <div className="m-auto max-w-5xl flex flex-col items-center w-full py-28">
                <div className="max-w-2xl flex flex-col items-center gap-4">
                    <h2 className="text-4xl font-bold">
                        Ready to get started?
                    </h2>
                    <p className="text-lg text-center text-zinc-600">
                        If you find the packages below are not suitable, please contact us immediately to receive a detailed quote that suits your needs and purposes.
                    </p>
                </div>
                <div className="w-full mt-14 xl:flex grid grid-cols-1 gap-7 justify-center">
                    <div className="mx-auto w-full max-w-[450px] flex flex-col rounded-3xl border border-zinc-900/10 p-8">
                        <h3 className="text-xl font-bold">Free</h3>
                        <div className="mt-4">
                            <span className="font-bold text-3xl"><span className="text-zinc-400">$</span>0</span>
                            <span className="text-xs">/month</span>
                        </div>
                        <div className='mt-6'>
                            <Link href="https://app.formini.so">
                                <button className="h-10 w-full text-center px-4 bg-black text-white rounded border border-black hover:bg-white hover:text-black transition">
                                    Get started
                                </button>
                            </Link>
                        </div>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">1 user</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">3 forms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">20 document merges/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">100 submissions/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">100MB files storage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">AI form builder with ChatGPT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Submissions analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited teams</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited fields per form</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited joining workspaces</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[450px] flex flex-col rounded-3xl border-2 bg-blue-600 p-8 text-white shadow-lg relative">

                        <div className='w-full flex flex-col relative z-10'>
                            <h3 className="text-xl font-bold">Plus</h3>
                            <div className="mt-4">
                                <span className="font-bold text-3xl"><span className="text-blue-300">$</span>10</span>
                                <span className="text-xs">/month</span>
                            </div>
                            <div className='mt-6'>
                                <Link href="https://app.formini.so">
                                    <button className="h-10 w-full text-center px-4 bg-white text-blue-600 rounded border border-white hover:bg-white hover:text-black transition shadow-sm">
                                        Get started
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">2 users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">20 forms</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">100 document merges/mo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">500 submissions/mo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">1GB files storage</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">AI form builder with ChatGPT</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">Submissions analysis</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">Unlimited teams</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">Unlimited fields per form</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">Unlimited joining workspaces</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-45 w-4" />
                                    <span className="text-sm">Custom ending page</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
                            <svg aria-hidden="true" className="absolute inset-0 h-full w-full"><defs><pattern id=":R6lm:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="50%"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:R6lm:)"></rect></svg>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[450px] flex flex-col rounded-3xl border border-zinc-900/10 p-8">
                        <h3 className="text-xl font-bold">Business</h3>
                        <div className="mt-4">
                            <span className="font-bold text-3xl"><span className="text-zinc-400">$</span>40</span>
                            <span className="text-xs">/month</span>
                        </div>
                        <div className='mt-6'>
                            <Link href="https://app.formini.so">
                                <button className="h-10 w-full text-center px-4 bg-black text-white rounded border border-black hover:bg-white hover:text-black transition">
                                    Get started
                                </button>
                            </Link>
                        </div>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">5 users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">200 forms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">500 document merges/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">2,000 submissions/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">5GB files storage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">AI form builder with ChatGPT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Submissions analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited teams</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited fields per form</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Unlimited joining workspaces</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Custom ending page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingTable;