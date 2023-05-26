import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FC } from "react"
import FormBuilder from "./form-builder";
import AIFormBuilder from "./ai-form-builder";
import DocumentMerges from "./document-merges";
import RepeatableGroup from "./repeatable-group";
import DataAnalysis from "./data-analysis";

type Props = {

}

const Features: FC<Props> = ({ }) => {
    return (
        <section className="w-full mt-12">
            <div className="w-full bg-gradient-to-b from-white to-slate-100">
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/welcome.png"
                        alt="Formini Features"
                        width={855}
                        height={451}
                        quality={100}
                        className="-mb-16"
                    />
                </div>
            </div>

            <div id="features">
                <FormBuilder />
                <AIFormBuilder />
                <DocumentMerges />
                <RepeatableGroup />
                <DataAnalysis />
            </div>
        </section>
    )
}

export default Features;