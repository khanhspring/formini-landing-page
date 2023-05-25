import Image from "next/image";
import { FC } from "react";
import twitterLogo from '../../public/images/twitter-logo.svg'
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
                <span className="text-zinc-500">
                    <Link href="https://twitter.com/harrytraneta" target="_blank">
                        <Image
                            src={twitterLogo}
                            alt="Twitter"
                            width={27}
                        />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer;