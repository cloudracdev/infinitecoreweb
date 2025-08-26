import SeminovosSection from "@/pages/home/components/SeminovosSection"
import Card from "./Card"
import CtaSection from "./CtaSection"
import TurnBack from "./TurnBack"
import WarrantlyInfo from "./WarrantlyInfo"
import type { ContentSectionProps } from "@/interface/ContentSectionProps"

function ContentSection({ title, products }: ContentSectionProps) {
  return (
    <section className="min-h-screen bg-white py-8">
      <div className="mx-auto mb-4 max-w-7xl px-4">
        <TurnBack title={title} />

        <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Card
              key={item.productName}
              isOut={item.isOut}
              productValue={item.productValue}
              productDescription={item.productDescription}
              productName={item.productName}
              productImage={item.productImage}
              productImageAlt={item.productImageAlt}
              configuration={item.configuration}
              color={item.color}
            />
          ))}
        </div>
        <CtaSection />
        <SeminovosSection variant="category" />
      </div>
      <WarrantlyInfo />
    </section>
  )
}

export default ContentSection
