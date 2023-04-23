import { LinkType } from '@/types'

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
  className: string
}


export interface TestimonialsCardProps {
  name: string;
  job: string;
  comment: string;
  image: string;
};

export interface CustomDropdown {
  data: Array<LinkType>
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
