import { FC } from "react"
import formFields from '../../../public/images/form-fields.svg'
import addInIcon from '../../../public/images/add-in.svg'
import Image from "next/image"

type Props = {

}

const FormBuilder: FC<Props> = ({ }) => {
    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-24 grid grid-cols-2 gap-7">
                <div className="flex flex-col justify-center gap-6">
                    <div>
                        <Image
                            src={addInIcon}
                            alt="Form builder"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        Powerful form builder
                    </h2>
                    <div className="flex flex-col gap-3 text-zinc-500">
                        <p>Easy to use form builder — like you use Notion.</p>
                        <p>Drag and drop fields to reorder, that very simple.</p>
                        <p>Various fields can be used to create flexible forms with specific settings for each individual field.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={formFields}
                        alt="Form fields"
                        className="-rotate-3 hover:-rotate-1 transition"
                    />
                </div>
            </div>
        </div>
    )
}

export default FormBuilder;