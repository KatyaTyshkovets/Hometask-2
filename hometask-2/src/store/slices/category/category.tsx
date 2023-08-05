import { createSlice } from "@reduxjs/toolkit";
import { ReducerName } from "../../../types/enum/ReducerName";
import { IInitialStateCategory } from "../../../types/category/category";

const initialState: IInitialStateCategory = {
    category: [
        {
            name: 'Task',
            icon: <div className="content-list-notes-item-name-icon-container">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="content-list-notes-item-name-icon"
                    viewBox="0 0 48.000000 48.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M27 433 c-13 -12 -7 -23 16 -32 15 -6 32 -32 54 -84 27 -66 29 -78
            17 -94 -17 -23 -18 -57 0 -72 9 -8 55 -11 137 -9 102 3 124 6 124 18 0 12 -21
            16 -118 18 -112 3 -117 3 -107 22 9 16 23 20 98 22 l87 3 43 75 c23 41 41 79
            39 85 -2 6 -66 11 -160 13 -145 2 -156 4 -162 22 -6 20 -53 29 -68 13z" />
                        <path d="M110 105 c-26 -32 13 -81 48 -59 9 6 18 19 20 28 8 38 -43 61 -68 31z" />
                        <path d="M310 105 c-26 -32 13 -81 48 -59 22 14 27 41 12 59 -16 19 -44 19
            -60 0z" />
                    </g>
                </svg>
            </div>
        },
        {
            name: "Random Thought",
            icon: <div className="content-list-notes-item-name-icon-container">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="content-list-notes-item-name-icon"
                        viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
    
                        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M153 469 c-74 -22 -132 -121 -120 -208 2 -21 19 -67 36 -102 20 -41
            31 -79 31 -106 l0 -43 110 0 c103 0 110 1 110 20 0 16 7 20 30 20 46 0 80 39
            80 90 0 33 4 42 25 52 31 14 31 15 1 69 -13 24 -30 64 -36 88 -27 103 -145
            155 -267 120z m141 -64 c3 -9 12 -12 22 -8 13 5 16 3 11 -10 -4 -10 0 -20 11
            -27 16 -9 16 -11 0 -20 -11 -7 -15 -17 -11 -27 5 -12 2 -15 -10 -10 -10 4 -20
            0 -27 -11 -9 -16 -11 -16 -20 0 -7 11 -17 15 -27 11 -12 -5 -15 -2 -10 10 4
            10 0 20 -11 27 -16 9 -16 11 0 20 11 7 15 17 11 27 -5 13 -2 15 11 10 10 -4
            19 -1 22 8 4 8 10 15 14 15 4 0 10 -7 14 -15z m-120 -80 c3 -9 12 -12 22 -8
            13 5 16 3 11 -10 -4 -10 0 -20 11 -27 16 -9 16 -11 0 -20 -11 -7 -15 -17 -11
            -27 5 -12 2 -15 -10 -10 -10 4 -20 0 -27 -11 -9 -16 -11 -16 -20 0 -7 11 -17
            15 -27 11 -12 -5 -15 -2 -10 10 4 10 0 20 -11 27 -16 9 -16 11 0 20 11 7 15
            17 11 27 -5 13 -2 15 11 10 10 -4 19 -1 22 8 4 8 10 15 14 15 4 0 10 -7 14
            -15z" />
                            <path d="M254 366 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28
            -12z" />
                            <path d="M134 286 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
            -13 2 -25 -3 -28 -12z" />
                        </g>
                    </svg>
                </div>,
        },
        {
            name: "Idea",
            icon: <div className="content-list-notes-item-name-icon-container">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="content-list-notes-item-name-icon"
                            viewBox="0 0 48.000000 48.000000" preserveAspectRatio="xMidYMid meet">
    
                            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M224 466 c-8 -22 3 -49 19 -43 6 2 12 14 12 27 0 27 -22 39 -31 16z" />
                                <path d="M72 407 c-17 -20 22 -57 40 -39 10 10 8 17 -8 33 -17 17 -22 18 -32
                6z" />
                                <path d="M375 400 c-14 -16 -16 -23 -7 -32 10 -10 17 -8 33 8 17 17 18 22 6
                32 -11 9 -18 8 -32 -8z" />
                                <path d="M172 360 c-87 -53 -95 -167 -17 -228 18 -14 25 -29 25 -54 0 -43 15
                -58 60 -58 45 0 60 15 60 58 0 25 7 40 25 54 14 11 32 33 40 48 61 117 -80
                249 -193 180z" />
                                <path d="M5 250 c-4 -7 -3 -16 3 -22 14 -14 47 -6 47 12 0 18 -40 26 -50 10z" />
                                <path d="M425 250 c-4 -7 -3 -16 3 -22 14 -14 47 -6 47 12 0 18 -40 26 -50 10z" />
                                <path d="M76 101 c-14 -15 -14 -20 -3 -30 11 -8 18 -7 31 8 10 11 15 25 11 30
                -9 16 -20 14 -39 -8z" />
                                <path d="M365 109 c-4 -5 1 -19 11 -30 13 -15 20 -16 31 -8 11 10 11 15 -3 30
                -19 22 -30 24 -39 8z" />
                            </g>
                        </svg>
                    </div>
        }
    ]
}

const { reducer, actions } = createSlice({
    name: ReducerName.CATEGORY,
    initialState,
    reducers: {}
})

const CategoryActionsCreator = {
    ...actions
}

export { CategoryActionsCreator, reducer }