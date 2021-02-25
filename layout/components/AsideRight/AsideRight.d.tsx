interface Links {
    name: string,
    icon: string
    path: string
  }

export interface AsideRightProps {
    isFixed: boolean
    links?: Links[]
    isDisplay: boolean | string
}