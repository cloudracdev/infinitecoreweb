import type { CardInterface } from "./CardInterface"

export interface ContentSectionProps {
  title: string
  products: ReadonlyArray<CardInterface>
}
