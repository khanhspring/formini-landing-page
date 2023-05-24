import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FC } from "react"
import FormBuilder from "./form-builder";
import AIFormBuilder from "./ai-form-builder";
import DocumentMerges from "./document-merges";

type Props = {

}

const Features: FC<Props> = ({ }) => {
    return (
        <section className="w-full mt-24" id="features">
            <div className="w-full bg-gradient-to-b from-white to-slate-100">
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/features.png"
                        alt="Formini Features"
                        width={855}
                        height={451}
                        quality={100}
                        className="-mb-12"
                    />
                </div>
            </div>

            <FormBuilder />
            <AIFormBuilder />
            <DocumentMerges />
        </section>
    )
}

export default Features;