import Image from "next/image";
import { FC } from "react";
import twitterLogo from '../../../../public/images/twitter-logo.svg'
import Link from "next/link";
type Props = {

}

const Footer: FC<Props> = ({ }) => {
    return (
        <footer className='w-full'>
            <div className='max-w-5xl m-auto flex items-center justify-between py-7'>
                <Image
                    src="/images/logo.svg"
                    alt="Formini Logo"
                    width={100}
                    height={24}
                    priority
                />
                <div className="flex items-center justify-center gap-7 text-sm">
                    <Link href="/#pricing" className="hover:underline">
                        Pricing
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms & conditions
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Refund policy
                    </Link>
                    <Link href="https://twitter.com/harrytraneta" target="_blank">
                        <Image
                            src={twitterLogo}
                            alt="Twitter"
                            width={20}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;