export type ILogo = {
    name: string
}

export enum Category {
    WEB = "WEB",
    MOBILE = "MOBILE",
    GAMING = "GAMING",
    DESKTOP = "DESKTOP"

}

export type IPortfolio = {
    category : Category,
    logo: string,
    mainTitle: string,
    timeDuration: string,
    description: string,
    githubLink: string,
    demo: string,
    technology: ILogo[]
}