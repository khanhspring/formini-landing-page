import Link from "next/link";
import { FC } from "react";

type Props = {

}

const Banner: FC<Props> = ({ }) => {
    return (
        <section className='max-w-6xl px-16 w-full m-auto py-12'>
            <div className='w-[350px] h-16 m-auto relative'>
                <div className='w-[1px] h-full absolute left-0 border-mark-to-t line-animation-to-t'></div>
                <div className='w-[1px] h-full absolute right-0 border-mark-to-t line-animation-to-t'></div>
            </div>

            <div className='relative'>
                <div className='w-[1px] absolute left-0 border-mark-to-tb line-animation-to-tb'></div>
                <div className='w-[1px] absolute right-0 border-mark-to-tb line-animation-to-tb'></div>

                <div className='relative py-8 z-10'>
                    <div className='h-[1px] absolute top-0 border-mark-to-lr line-animation-to-r'></div>

                    <h1 className='text-6xl font-black text-center z-2'>
                        Multipurpose online forms <br /> and document merges
                    </h1>
                </div>

                <div className='relative py-8 z-10'>
                    <div className='h-[1px] absolute top-0 border-mark-to-lr line-animation-to-r'></div>

                    <p className='text-center text-xl text-zinc-600 leading-9'>
                        Formini - online forms builder is simple to use, yet powerful with AI support.
                        <br />
                        Effortlessly collect and merge data into documents with precision, making the process easy and intuitive.
                    </p>
                </div>

                <div className='relative z-10'>
                    <div className='h-[1px] absolute top-0 border-mark-to-lr line-animation-to-r'></div>
                    <div className='h-[1px] absolute bottom-0 border-mark-to-lr line-animation-to-r'></div>

                    <div className='w-[350px] m-auto py-8 flex flex-col items-center gap-3 relative'>
                        <div className='w-[1px] absolute left-0 top-0 border-mark-to-b line-animation-to-b'></div>
                        <div className='w-[1px] absolute right-0 top-0 border-mark-to-b line-animation-to-b'></div>

                        <div className='w-full flex items-center justify-center gap-4'>
                            <Link href={process.env.DEMO_FORM_URL || '#'} target="_blank" className='h-12 px-4 flex items-center gap-2 text-zinc-600 rounded border border-zinc-300 hover:border-black transition font-semibold'>
                                Try Demo
                            </Link>
                            <Link href="https://app.formini.so/sign-in" className='h-12 px-4 flex items-center gap-2 bg-black text-white rounded border border-black hover:bg-white hover:text-black transition font-semibold'>
                                Get Started
                            </Link>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <p className='text-sm space tracking-wider text-zinc-500'>Free plan included</p>
                            <p className='text-sm space tracking-wider text-zinc-500'>No credit card required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;