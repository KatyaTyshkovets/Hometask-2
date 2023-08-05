export interface IActions {
    type: string,
    payload?: INotes[] | []
}

export interface INotes {
    id: number,
    name: string,
    category: string,
    dates: string[],
    content: string,
    created: string,
    archive: boolean,
    visible?: boolean
}

export interface IInitialStateNotes {
    notes: INotes[] | []
}

export interface ICreatedOrUpdateNoteData {
    id?: number,
    name: string,
    content: string,
    category: string
}