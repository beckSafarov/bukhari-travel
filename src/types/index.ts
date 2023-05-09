import { IconType } from 'react-icons'

export type SocialIconType = {
  Icon: IconType
  path: string
}

export type LinkType = {
  label: string
  path: string
}

export type SlideType = {
  slickNext(): void
  slickPrev(): void
}

export type BlogCardType = {
  id: number
  title: string
  description: string
  date: string
  image: string
  path: string
}

export type IconObjType = {
  dir: string
  onClick: (c: any) => void
}

export type DestinationCardType = {
  title: string
  image: string
  price: number
  subtitle: string
}

export type CardType = {
  title: string
  image: string
  price: number
  subtitle: string
}

export type DropdownLinkType = LinkType

export type AccordionElemType = {
  label: string,
  path?: string,
  onClick?(): void
}

export type NavLinkType = {
  label: string,
  path?: string,
  content?: Array<LinkType>
}

export type FAQType = {
  question: string, 
  content: React.ReactNode
}
export type WhyUsDataType = {
  title: string, 
  subtitle: string, 
}
export type TourInfoCardTypes = {
  label: string
  body: string | number
}

export type TourInfoType = {
  days: number,
  groupSize: number,
  price: number
}

export type TourDatesDataTypes={
  id: string,
  departingDate: string,
  finishingDate: string,
  isAvailable: boolean
}

export type TourCardDataTypes = {
  title: string
  image: string
  tourInfo: TourInfoType
  route: string
  description: string
  tourDatesData: Array<TourDatesDataTypes>
}