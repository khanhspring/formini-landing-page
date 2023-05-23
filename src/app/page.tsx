import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60'>
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
            <Link href="https://app.formini.so/sign-in">
              Sign in
            </Link>
            <Link href="https://app.formini.so/sign-up" className='h-9 px-4 flex items-center bg-black text-white rounded border border-black hover:bg-white hover:text-black transition'>
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center mt-16">
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

              <p className='text-center text-lg text-zinc-500 leading-9'>
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
                <p className='text-sm'>No credit card required</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
