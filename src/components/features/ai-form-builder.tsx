import { FC } from "react"
import aiFormBuilder from '../../../public/images/ai-form-builder.png'
import effectsIcon from '../../../public/images/effects.svg'
import Image from "next/image"

type Props = {

}

const AIFormBuilder: FC<Props> = ({ }) => {
    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-28 grid grid-cols-2 gap-7">
                <div className="pr-10">
                    <Image
                        src={aiFormBuilder}
                        alt="AI form builder"
                        className="rotate-3 rounded-xl shadow-lg hover:rotate-1 transition"
                    />
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <div>
                        <Image
                            src={effectsIcon}
                            alt="AI form builder icon"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        AI form builder
                    </h2>
                    <div className="flex flex-col gap-3 text-zinc-500">
                        <p>In addition, you have the option of uploading PDF or MS Word documents, and the AI will automatically extract information and design forms that meet your specifications.</p>
                        <p>Allow the AI to generate the form on your behalf, as it can be an enjoyable process.</p>
                        <p>You only need to provide a description of the desired form, and the AI will handle the rest.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIFormBuilder;