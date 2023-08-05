import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterPath } from "../types/router/router";

import Home from "../components/Home/Home";
import CreateOrEditNote from "../components/CreateOrEditNote/CreateOrEditNote";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import NotesItem from "../components/NotemItem/NotesItem";

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path={RouterPath.HOME} element={<Home />}></Route>
                <Route path={RouterPath.NOTES_ITEM} element={<NotesItem/>}></Route>
                <Route path={RouterPath.CREATE_NOTE} element={<CreateOrEditNote />}></Route>
                <Route path={RouterPath.EDIT_NOTE} element={<CreateOrEditNote />}></Route>
                <Route path={RouterPath.PAGE_NOT_FOUND} element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;