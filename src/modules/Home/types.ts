export type SlideType ={
  slickNext(): void
  slickPrev(): void
}

export type BlogCardType = {
  id:number,
  title: string
  description: string
  date: string
  image: string,
  path: string
}