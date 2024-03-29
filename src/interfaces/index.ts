import { FAQType, LinkType } from '@/types'
import React, { FormEvent } from 'react'

export interface TitleProps {
  children: React.ReactNode
  color?: string
  fontSize?: string
  className?: string
}

export interface SecondaryTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface ParaProps {
  children: React.ReactNode;
  className: string;
}
export interface StaticHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  size?: string,
}
export interface SectionsContainerProps {
  children: React.ReactNode;
  className: string;
  size: "lg" | "sm";
  id?: string,
}

export interface TestimonialsCardProps {
  name: string;
  job: string;
  comment: string;
  image: string;
}

export interface QuestionFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit(event: FormEvent): void;
  handleClick(): void;
  buttonText: string;
}

export interface CustomDropdown {
  data: Array<LinkType>;
  label: string;
}

export interface AccordionProps {
  children: React.ReactNode;
  contentClass?: string;
  content: Array<LinkType>;
}

export interface SidebarProps {
  mobileMenuClicked: boolean;
  onClose(): void;
}

export interface FAQProps {
  data: Array<FAQType>;
  className?: string;
  bordered?: boolean;
  noHighlight?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export interface DestinationPageDataProps {
  id: number;
  label:string;
  name: string;
  title: string;
  heroImage: string;
  shortInfoText: string;
  highlightsText: string;
  photos: Array<string>;
  video: string;
}

export interface ImagesSlider {
  photos: Array<string>,
  className?: string
}

export interface ModalProps {
  onClose(): void, 
  isOpen: boolean,
  className?: string,
  title: string,
  children: React.ReactNode
}
export interface PaymentModalProps {
  onClose(): void, 
  isOpen: boolean,
  className?: string,
  title: string,
}

