import Image from "next/image";
import { FC } from "react";

type Props = {

}

const Footer: FC<Props> = ({ }) => {
    return (
        <footer className='w-full'>
            <div className='max-w-6xl m-auto flex items-center justify-between py-7'>
                <Image
                    src="/images/logo.svg"
                    alt="Formini Logo"
                    width={100}
                    height={24}
                    priority
                />
                <span className="text-zinc-500">Copyright © 2023 Formini.so. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;