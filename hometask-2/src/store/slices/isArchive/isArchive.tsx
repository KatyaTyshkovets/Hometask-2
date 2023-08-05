import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerName } from "../../../types/enum/ReducerName";
import { IInitialStateIsArchive } from "../../../types/isArchive/isArchive";

const initialState: IInitialStateIsArchive = {
    isArchive: false
}

const { reducer, actions } = createSlice({
    name: ReducerName.IS_ARCHIVE,
    initialState,
    reducers: {
        setIsArchive: (state, action: PayloadAction) => {
            state.isArchive = !state.isArchive
            return state
        }
    }
})

const IsArchiveActionsCreator = {
    ...actions
}

export { IsArchiveActionsCreator, reducer }