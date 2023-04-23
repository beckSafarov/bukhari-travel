import { IconType } from 'react-icons'

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