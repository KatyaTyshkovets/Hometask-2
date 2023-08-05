import { configureStore } from "@reduxjs/toolkit";
import { ReducerName } from "../types/enum/ReducerName";
import { reducer as categoryReducer } from './slices/category/category';
import { reducer as isArchiveReducer } from './slices/isArchive/isArchive';
import { reducer as notesReducer } from './slices/notes/notes';

const store = configureStore({
    reducer: {
        [ReducerName.CATEGORY]: categoryReducer,
        [ReducerName.IS_ARCHIVE]: isArchiveReducer,
        [ReducerName.NOTES]: notesReducer
    }
})

export { store }