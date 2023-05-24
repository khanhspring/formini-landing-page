'use client';

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import documentMerged from '../../../public/images/document-merged.png';
import documentTemplate from '../../../public/images/document-template.png';
import formViewer from '../../../public/images/form-viewer.png';
import printIcon from '../../../public/images/print.svg';

type Props = {

}

const DocumentMerges: FC<Props> = ({ }) => {

    const [stackedClasses, setStackedClasses] = useState(['stack-front', 'stack-middle', 'stack-back']);
    const [stackedAnimatedClasses, setAnimatedStackedClasses] = useState(['stack-front-to-back', 'stack-middle-to-front', 'stack-back-to-middle']);

    useEffect(() => {
        const interval = setInterval(() => {
            setStackedClasses((prev) => {
                const classes = [...prev];
                [classes[0], classes[1], classes[2]] = [classes[2], classes[0], classes[1]];
                return classes;
            });
            setAnimatedStackedClasses((prev) => {
                const classes = [...prev];
                [classes[0], classes[1], classes[2]] = [classes[2], classes[0], classes[1]];
                return classes;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            <div className="m-auto max-w-5xl w-full py-28 grid grid-cols-2 gap-7">
                <div className="flex flex-col justify-center gap-6">
                    <div>
                        <Image
                            src={printIcon}
                            alt="Document merges icon"
                        />
                    </div>
                    <h2 className="text-3xl font-bold">
                        Document merges
                    </h2>
                    <div className="flex flex-col gap-5 text-zinc-500">
                        <div className="flex items-center gap-2">
                            <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${stackedAnimatedClasses[0] === 'stack-middle-to-front' ? 'bg-blue-600 ring-2' : 'bg-zinc-400'}`}>1</span>
                            <span className="flex-1">Create a form to collect data.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${stackedAnimatedClasses[1] === 'stack-middle-to-front' ? 'bg-blue-600 ring-2' : 'bg-zinc-400'}`}>2</span>
                            <span className="flex-1">Prepare a document template.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${stackedAnimatedClasses[2] === 'stack-middle-to-front' ? 'bg-blue-600 ring-2' : 'bg-zinc-400'}`}>3</span>
                            <span className="flex-1">Generate the perfect document by merging the submission into the template.</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-[450px] h-[550px] relative -rotate-6 hover:-rotate-3 transition">
                        <div className={`absolute left-0 w-full h-full ${stackedClasses[0]} ${stackedAnimatedClasses[0]}`}>
                            <span className="absolute top-5 left-5 flex items-center justify-center w-5 h-5 rounded-full text-white bg-blue-600 ring-2">1</span>
                            <Image
                                src={formViewer}
                                alt="Form viewer"
                                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className={`absolute left-0 w-full h-full ${stackedClasses[1]} ${stackedAnimatedClasses[1]}`}>
                            <span className="absolute top-5 left-5 flex items-center justify-center w-5 h-5 rounded-full text-white bg-blue-600 ring-2">2</span>
                            <Image
                                src={documentTemplate}
                                alt="Document template"
                                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className={`absolute left-0 w-full h-full ${stackedClasses[2]} ${stackedAnimatedClasses[2]}`}>
                            <span className="absolute top-5 left-5 flex items-center justify-center w-5 h-5 rounded-full text-white bg-blue-600 ring-2">3</span>
                            <Image
                                src={documentMerged}
                                alt="Document merged"
                                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentMerges;