import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react"

type Props = {

}

const GettingStarted: FC<Props> = ({ }) => {
    return (
        <section className='px-16 w-full m-auto flex items-center justify-center my-24'>
            <div className="w-full max-w-6xl bg-indigo-50 rounded-3xl p-24 flex items-center justify-between gap-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-bold">
                        Get started now and speed up your work
                    </h2>
                    <p className="text-zinc-500">
                        Initiate your tasks without delay to boost your productivity and optimize your time.
                        Act promptly to witness a positive transformation in your workflow.
                        Get started now and accelerate your progress.
                    </p>
                </div>
                <div>
                    <Link href="https://app.formini.so/sign-in" className='h-16 px-6 font-semibold text-lg flex items-center gap-2 bg-black text-white rounded border border-black hover:bg-white hover:text-black transition whitespace-nowrap'>
                        Get Started for free
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default GettingStarted;