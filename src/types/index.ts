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

export type CardType = {
  title: string
  image: string
  price: number
  subtitle: string
}

export type DropdownLinkType = {
  label: string
  path: string
}

export type NavLinkType = {
  label: string,
  path?: string,
  content?: Array<DropdownLinkType>
}