import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerName } from "../../../types/enum/ReducerName";
import { IInitialStateNotes, INotes, ICreatedOrUpdateNoteData } from "../../../types/notes/notes";

const initialState: IInitialStateNotes = {
    notes: [
        {
            id: 0,
            name: 'Shopping list',
            category: 'Task',
            dates: [],
            content: 'Tomato, bread, butter, salt, bottle of water,coffee',
            created: "April 10, 2021",
            archive: false
        },
        {
            id: 1,
            name: 'Shopping list1',
            category: 'Task',
            dates: [],
            content: 'Tomato, bread, butter, salt, bottle of water,coffee',
            created: "April 10, 2021",
            archive: false,
            visible: false,
        },
        {
            id: 2,
            name: 'Shopping list2',
            category: 'Task',
            dates: [],
            content: 'Tomato, bread, butter, salt, bottle of water,coffee',
            created: "April 10, 2021",
            archive: true,
            visible: false
        },
        {
            id: 3,
            name: 'New Feature',
            category: 'Idea',
            dates: ['3/5/2021', '5/5/2021', '3/5/2021', '3/5/2021'],
            content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021 the dates column is 3/5/2021, 5/5/2021',
            created: "April 10, 2021",
            archive: false,
            visible: false
        }
    ]
}

const { reducer, actions } = createSlice({
    name: ReducerName.NOTES,
    initialState,
    reducers: {
        addOrDeleteNoteArchive: (state, action: PayloadAction<number>) => {
            let newNotes: INotes[] = state.notes.filter(item => {

                if (item.id === action.payload) {
                    item.archive = !item.archive;
                }

                return item;
            })

            state.notes = newNotes;

            return state;
        },
        deleteNoteToState: (state, action: PayloadAction<number>) => {
            let newNotes: INotes[] = state.notes.filter(item => item.id !== action.payload);

            state.notes = newNotes

            return state;
        },
        deleteAllNotesToState: (state, action: PayloadAction<boolean>) => {
            let newNotes: INotes[] = state.notes.filter(item => item.archive !== action.payload);

            state.notes = newNotes

            return ;
        },
        updateNoteToState: (state, action: PayloadAction<ICreatedOrUpdateNoteData>) => {
            let dates: RegExpMatchArray | null = action.payload.content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
            let result = {}

            if (!action.payload.name.trim().length) {
                action.payload.name = 'New Note';
            }

            dates = dates !== null ? dates : [];

            result = {
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content,
                dates: dates
            }

            let newNotes: INotes[] = state.notes.map((item: INotes) => {

                if (item.id === action.payload.id) {

                    item = {...item, ...result};

                }

                return item;
            })

            state.notes = newNotes

            return state;
        },
        createNoteToState: (state, action: PayloadAction<ICreatedOrUpdateNoteData>) => {
            let date: Date = new Date();
            let month: string = date.toLocaleDateString('en-US', {
                month: 'long'
            })
            let day: number = date.getDate();
            let year: number = date.getFullYear();
            let created: string = month + ' ' + day + ', ' + year;
            let dates: RegExpMatchArray | null = action.payload.content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
        
            if (!action.payload.name.trim().length) {
                action.payload.name = 'Edit Note';
            }
        
            dates = dates !== null ? dates : [];
        
            let result: INotes = {
                id: state.notes.length,
                name: action.payload.name,
                created: created,
                category: action.payload.category,
                content: action.payload.content,
                dates: dates,
                archive: false,
            }

            state.notes = [...state.notes,  result ]
        }
    }
})

const NotesActionsCreator = {
    ...actions
}

export { NotesActionsCreator, reducer }