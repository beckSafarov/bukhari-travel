import { FAQType, LinkType } from '@/types'

export interface TitleProps {
  children: React.ReactNode
  color?: string
  fontSize?: string
  className?: string
}

export interface SecondaryTitleProps {
  children: React.ReactNode
  className?: string
}

export interface ParaProps {
  children: React.ReactNode
  className: string
}
export interface StaticHeroProps {
  title: string
  subtitle?: string
  image?: string
}
export interface SectionsContainerProps {
  children: React.ReactNode
  className: string,
  size: 'big' | 'small'
}


export interface TestimonialsCardProps {
  name: string;
  job: string;
  comment: string;
  image: string;
};

export interface CustomDropdown {
  data: Array<LinkType>,
  label: string
}

export interface AccordionProps {
  children: React.ReactNode,
  contentClass?: string,
  content: Array<LinkType>
}

export interface SidebarProps {
  mobileMenuClicked: boolean
  onClose(): void
}

export interface FAQProps {
  data: Array<FAQType>,
  className?: string,
}
