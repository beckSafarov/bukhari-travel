import { FAQType, LinkType } from '@/types'
import React, { FormEvent } from 'react'

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
  size: 'lg' | 'sm'
}


export interface TestimonialsCardProps {
  name: string;
  job: string;
  comment: string;
  image: string;
};

export interface QuestionFormProps {
  formRef:React.RefObject<HTMLFormElement>,
  handleSubmit(event:FormEvent):void,
  handleClick():void,
  buttonText: string,
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

export interface ButtonProps {
  children: React.ReactNode
  onClick: () => void,
  className?: string,
}