import Image from "next/image";
import Link from "next/link";
import { FC } from "react"

type Props = {

}

const Header: FC<Props> = ({ }) => {
    return (
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
    )
}

export default Header;