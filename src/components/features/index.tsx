import Image from "next/image";
import { FC } from "react";
import AIFormBuilder from "./ai-form-builder";
import DataAnalysis from "./data-analysis";
import DocumentMerges from "./document-merges";
import FormBuilder from "./form-builder";
import RepeatableGroup from "./repeatable-group";
import PageView from "./page-view";

type Props = {

}

const Features: FC<Props> = ({ }) => {
    return (
        <section className="w-full mt-8">
            <div className="w-full bg-gradient-to-b from-white to-slate-100">
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <Image
                        src="/images/welcome.png"
                        alt="Formini Features"
                        width={855}
                        height={451}
                        quality={100}
                        className="-mb-14"
                    />
                </div>
            </div>

            <div id="features">
                <FormBuilder />
                <AIFormBuilder />
                <DocumentMerges />
                <RepeatableGroup />
                <DataAnalysis />
                <PageView />
            </div>
        </section>
    )
}

export default Features;