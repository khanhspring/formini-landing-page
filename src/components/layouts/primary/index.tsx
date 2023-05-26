import { FC, PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = PropsWithChildren & {

}

const PrimaryLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PrimaryLayout;