import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-zinc-900/10 bg-white/95 supports-backdrop-blur:bg-white/60'>
        <nav className='max-w-6xl m-auto flex items-center justify-between py-4'>
          <div className='flex items-center gap-12'>
            <Image
              src="/images/logo.svg"
              alt="Formini Logo"
              width={100}
              height={24}
              priority
            />
            <div className='flex items-center gap-6 text-sm'>
              <Link href="/#features">
                Features
              </Link>
              <Link href="/#pricing">
                Pricing
              </Link>
              <Link href="/docs">
                Docs
              </Link>
              <Link href="/roadmap">
                Road map
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-6 text-sm font-semibold'>
            <Link href="https://app.formini.so/sign-in" className='flex items-center justify-center whitespace-nowrap'>
              Sign in
            </Link>
            <Link href="https://app.formini.so/sign-up" className='h-9 w-full flex items-center justify-center whitespace-nowrap px-4 bg-black text-white rounded border border-black hover:bg-white hover:text-black transition'>
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center mt-12">
        <section className='max-w-6xl w-full m-auto'>
          <div className='w-[350px] h-24 m-auto relative'>
            <div className='w-[1px] h-full absolute left-0 top-0 bg-gradient-to-t from-white to-black/20 bg-[size:1px_5px] border-mark-to-t'></div>
            <div className='w-[1px] h-full absolute right-0 top-0 bg-gradient-to-t from-white to-black/20 bg-[size:1px_5px] border-mark-to-t'></div>
          </div>

          <div className='relative'>
            <div className='w-[1px] absolute left-0 -top-24 -bottom-24 bg-gradient-to-t from-white to-black/20 bg-[size:1px_5px] border-mark-to-tb'></div>
            <div className='w-[1px] absolute right-0 -top-24 -bottom-24 bg-gradient-to-t from-white to-black/20 bg-[size:1px_5px] border-mark-to-tb'></div>

            <div className='relative py-8'>
              <div className='h-[1px] absolute -left-20 -right-20 top-0 bg-gradient-to-r from-white to-black/20 bg-[size:5px_1px] border-mark-to-lr'></div>

              <h1 className='text-6xl font-black text-center z-2'>
                Multipurpose online forms <br /> and document merges
              </h1>
            </div>

            <div className='relative py-8'>
              <div className='h-[1px] absolute -left-20 -right-20 top-0 bg-gradient-to-r from-white to-black/20 bg-[size:5px_1px] border-mark-to-lr'></div>

              <p className='text-center text-xl text-zinc-600 leading-9'>
                Formini - online forms builder is simple to use, yet powerful with AI support.
                <br />
                Effortlessly collect and merge data into documents with precision, making the process easy and intuitive.
              </p>
            </div>

            <div className='relative'>
              <div className='h-[1px] absolute -left-20 -right-20 top-0 bg-gradient-to-r from-white to-black/20 bg-[size:5px_1px] border-mark-to-lr'></div>
              <div className='h-[1px] absolute -left-20 -right-20 bottom-0 bg-gradient-to-r from-white to-black/20 bg-[size:5px_1px] border-mark-to-lr'></div>

              <div className='w-[350px] m-auto py-8 flex flex-col items-center gap-3 relative'>
                <div className='w-[1px] absolute left-0 top-0 -bottom-28 bg-gradient-to-b from-white to-black/20 bg-[size:1px_5px] border-mark-to-b'></div>
                <div className='w-[1px] absolute right-0 top-0 -bottom-28 bg-gradient-to-b from-white to-black/20 bg-[size:1px_5px] border-mark-to-b'></div>

                <div className='w-full flex items-center justify-center gap-4'>
                  <Link href="https://app.formini.so/sign-in" className='h-12 px-4 flex items-center bg-black text-white rounded border border-black hover:bg-white hover:text-black transition font-semibold'>
                    Get Started
                  </Link>
                  <Link href="https://app.formini.so/sign-in" className='h-12 px-4 flex items-center text-zinc-600 rounded border border-zinc-300 hover:border-black transition font-semibold'>
                    Try Demo
                  </Link>
                </div>
                <p className='text-sm space tracking-wider text-zinc-500'>No credit card required</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mt-14" id="pricing">
            <div className="m-auto max-w-6xl flex flex-col items-center w-full py-20">
                <div className="max-w-[45rem] flex flex-col items-center gap-3">
                    <h2 className="text-3xl font-bold">
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
                                <span className="text-sm">500MB files storage</span>
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
                                <span className="text-sm">Unlimited joining workspaces</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[450px] flex flex-col rounded-3xl border-2 bg-blue-600 p-8 text-white shadow-lg">
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
                                <span className="text-sm">3 users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">25 forms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">200 document merges/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">1,000 submissions/mo</span>
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
                                <span className="text-sm">Unlimited joining workspaces</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">Custom ending page</span>
                            </div>
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
                                <span className="text-sm">1,000 forms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">1,000 document merges/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">10,000 submissions/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckIcon className="h-45 w-4" />
                                <span className="text-sm">10GB files storage</span>
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
      </main>
    </>
  )
}
