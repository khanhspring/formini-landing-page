import { FC } from "react"
import repeatableGroup from '../../../public/images/repeatable-group.gif'
import refreshIcon from '../../../public/images/refresh.svg'
import Image from "next/image"

type Props = {

}

const RepeatableGroup: FC<Props> = ({ }) => {
    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-24 grid grid-cols-2 gap-7">
                <div className="pr-10">
                    <div className="w-[470px] h-[280px] overflow-hidden rotate-3 hover:rotate-1 transition rounded-xl shadow-lg ">
                        <Image
                            src={repeatableGroup}
                            alt="Repeatable group"
                            fill
                            className="ml-0.5"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex items-center justify-center w-8 h-7 animate-spin">
                        <Image
                            src={refreshIcon}
                            alt="Repeatable group icon"
                            className="rotate-180"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        Repeatable fields group
                    </h2>
                    <div className="flex flex-col gap-3 text-zinc-500">
                        <p>Allows the creation of groups of repeating data fields.</p>
                        <p>Proves to be highly advantageous while entering arrays or lists.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepeatableGroup;