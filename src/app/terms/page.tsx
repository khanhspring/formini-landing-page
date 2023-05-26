import GettingStarted from "@/components/getting-started";

const TermsAndConditionsPage = ({ }) => {
    return (
        <section className="w-full">
            <div className="max-w-4xl w-full m-auto flex flex-col items-center justify-center py-28">
                <h2 className="font-bold text-5xl">Terms and Conditions</h2>
                <p className="text-lg text-zinc-500 mt-4">By continuing to use our platform, you agree to these terms and conditions.</p>
            </div>

            <div className="w-full py-24 bg-slate-50">
                <article className="max-w-4xl w-full m-auto prose lg:prose-xl">
                    <h3>Billing and refunds</h3>
                    <p>Our product is accessible through a monthly subscription fee that we charge.</p>
                    <p>We do not offer refunds, either full or partial, due to the nature of our product. However, if you have any issues or concerns with our product or services, you may contact our customer support team for assistance.</p>
                    <p>You may cancel your subscription at any time, and we will no longer charge you any further fees once you have cancelled your subscription.</p>
                    <p>Please note that any changes in pricing, pricing policies, features, and access restrictions may occur at any time. We will notify you of such changes via email or on our website to keep you informed.</p>
                    <h3>Emails</h3>
                    <p>We could utilize your email address to reach out to you regarding your account, updates to our product, and various marketing activities. You retain the ability to unsubscribe from these communications at your discretion.</p>
                    <h3>Conditions</h3>
                    <p>We hold the right to modify or adjust the policy at any given time.</p>
                    <p>By continuing to use our platform, you acknowledge and accept these terms and conditions.</p>
                </article>
            </div>
            <GettingStarted />
        </section>
    )
}

export default TermsAndConditionsPage;