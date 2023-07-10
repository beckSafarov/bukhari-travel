export type HomeDataTypes = {
  landingTitle: string
  landingSubtitle: string
  AboutUsTitle: string
  AboutUsBody: string
  servicesTitle: string
  servicesBody: string
  FooterDescription: string
  pageTitle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type HomeResDataTypes = {
  id: number
  attributes: HomeDataTypes
}

export type HomeFullResTypes = {
  data: HomeResDataTypes
  meta: {}
}
