import Banner from '@/components/banner'
import Features from '@/components/features'
import Header from '@/components/header'
import PricingTable from '@/components/pricing-table'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mt-12">
        <Banner />
        <Features />
        <PricingTable />
      </main>
    </>
  )
}
