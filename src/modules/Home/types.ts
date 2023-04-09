export interface SlideType {
  slickNext(): void
  slickPrev(): void
}

export type BlogCardType = {
  title: string
  description: string
  date: string
  image: string
}