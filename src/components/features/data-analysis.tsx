import { FC } from "react"
import formAnalysis from '../../../public/images/form-analysis.png'
import graphIcon from '../../../public/images/graph-pie-slice.svg'
import Image from "next/image"

type Props = {

}

const DataAnalysis: FC<Props> = ({ }) => {
    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-24 grid grid-cols-2 gap-7">
                <div className="flex flex-col justify-center gap-6">
                    <div>
                        <Image
                            src={graphIcon}
                            alt="Form data analysis"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        Data analysis
                    </h2>
                    <div className="flex flex-col gap-3 text-zinc-500">
                        <p>Automated, detailed analysis on each information field.</p>
                        <p>The charts are designed in a simple and understandable manner, which makes it effortless for you to assess your data with convenience.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={formAnalysis}
                        alt="Form fields"
                        className="-rotate-3 hover:-rotate-1 transition"
                    />
                </div>
            </div>
        </div>
    )
}

export default DataAnalysis;