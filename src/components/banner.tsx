import Link from "next/link";
import { FC } from "react"

type Props = {

}

const Banner: FC<Props> = ({ }) => {
    return (
        <section className='max-w-6xl px-16 w-full m-auto'>
            <div className='w-[350px] h-16 m-auto relative'>
                <div className='w-[1px] h-full absolute left-0 border-mark-to-t line-animation-to-t'></div>
                <div className='w-[1px] h-full absolute right-0 border-mark-to-t line-animation-to-t'></div>
            </div>

            <div className='relative'>
                <div className='w-[1px] absolute left-0 border-mark-to-tb line-animation-to-tb'></div>
                <div className='w-[1px] absolute right-0 border-mark-to-tb line-animation-to-tb'></div>

                <div className='relative py-8'>
                    <div className='h-[1px] absolute top-0 border-mark-to-lr line-animation-to-r'></div>

                    <h1 className='text-6xl font-black text-center z-2'>
                        Multipurpose online forms <br /> and document merges
                    </h1>
                </div>

                <div className='relative py-8'>
                    <div className='h-[1px] absolute top-0 border-mark-to-lr line-animation-to-r'></div>

                    <p className='text-center text-xl text-zinc-600 leading-9'>
                        Formini - online forms builder is simple to use, yet powerful with AI support.
                        <br />
                        Effortlessly collect and merge data into documents with precision, making the process easy and intuitive.
                    </p>
                </div>

                <div className='relative'>
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

                <svg viewBox="0 0 200 200" className="absolute left-0 top-0 z-1 h-[20rem] w-[20rem] -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-70">
                    <path fill="#0F62FE" d="M25.8,-46.4C35.6,-39,47.3,-36.5,53.4,-29.6C59.6,-22.7,60.2,-11.3,64.3,2.4C68.4,16.1,75.9,32.1,71.1,41.3C66.2,50.4,49,52.7,35.1,47C21.2,41.4,10.6,27.7,4.2,20.5C-2.2,13.2,-4.4,12.4,-9.4,12.9C-14.5,13.5,-22.3,15.4,-34.7,13.5C-47,11.6,-64,5.8,-62.6,0.8C-61.2,-4.2,-41.5,-8.4,-29.9,-11.7C-18.4,-15,-14.9,-17.5,-11.3,-28.5C-7.7,-39.6,-3.8,-59.2,2.1,-62.8C8,-66.4,16,-53.9,25.8,-46.4Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" className="absolute right-0 bottom-0 z-1 h-[40rem] w-[40rem] translate-y-1/2 translate-x-1/2 blur-3xl opacity-70">
                    <path fill="#08BDBA" d="M22.4,-42.7C31.3,-33.6,42.5,-32.3,53.2,-26.5C63.9,-20.6,74.3,-10.3,74.9,0.3C75.4,11,66.2,21.9,56.1,28.9C46,35.9,35.1,38.9,25.6,45.3C16.1,51.8,8.1,61.7,0.2,61.3C-7.6,60.9,-15.2,50.1,-21,41.6C-26.9,33,-31,26.6,-34.6,20.1C-38.2,13.5,-41.3,6.7,-40.2,0.6C-39.1,-5.5,-33.7,-10.9,-33,-22.6C-32.4,-34.2,-36.4,-52.1,-31.7,-63.6C-26.9,-75.1,-13.5,-80.3,-3.4,-74.4C6.7,-68.6,13.5,-51.8,22.4,-42.7Z" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    )
}

export default Banner;