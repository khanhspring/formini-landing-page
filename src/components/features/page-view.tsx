import { FC } from "react"
import presentation from '../../../public/images/presentation.png'
import articleIcon from '../../../public/images/article.svg'
import Image from "next/image"
import { NewspaperIcon } from "@heroicons/react/24/outline"

type Props = {

}

const PageView: FC<Props> = ({ }) => {
    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-24 grid grid-cols-2 gap-7">
                <div className="pr-10">
                    <Image
                        src={presentation}
                        alt="Page view"
                        className="rotate-3 rounded-xl shadow-lg hover:rotate-1 transition"
                    />
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <div>
                        <Image
                            src={articleIcon}
                            alt="Page view"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        Data presentation
                    </h2>
                    <div className="flex flex-col gap-3 text-zinc-500">
                        <p>You can easily share your data through the Page View feature.</p>
                        <p>This feature allows you to create lists with different styles, serving different needs: Simple list, Job board, Table basic, Article cards,...</p>
                        <p>Thereby perfecting your data workflow: from online form creation, data collection, data analysis, to data presentation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageView;