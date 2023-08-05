export interface IActions {
    type: string,
    payload?: ICategory[] | []
}

export interface ICategory {
    name: string,
    icon: JSX.Element,
}

export interface IInitialStateCategory {
    category: ICategory[] | []

}