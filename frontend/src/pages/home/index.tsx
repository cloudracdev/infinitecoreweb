import CategoryButtons from "@/pages/home/components/CategoryButtons"
import Hero from "@/pages/home/components/Hero"
import SeminovosSection from "@/pages/home/components/SeminovosSection"
import TradeInSection from "@/pages/home/components/TradeInSection"
import VideoSection from "@/pages/home/components/VideoSection"

function Home() {
  return (
    <>
      <Hero />
      <CategoryButtons />
      <VideoSection />
      <SeminovosSection variant="home" />
      <TradeInSection />
    </>
  )
}

export default Home
