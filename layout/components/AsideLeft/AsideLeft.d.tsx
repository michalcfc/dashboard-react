interface Links {
    name: string,
    icon: string
    path: string
  }

export interface AsideLeftProps {
    links?: Links[]
    isDisplay: Boolean | String
}