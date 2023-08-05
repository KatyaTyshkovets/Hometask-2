import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store/store";
import { Link } from "react-router-dom";
import PageNotFound from '../PageNotFound/PageNotFound';
import { ICategory } from "../../types/category/category";
import { INotes } from "../../types/notes/notes";

const NotesItem: React.FC = () => {
    const {notes, category} = useSelector(({notes, category}: RootState) => ({ notes, category}))
    
    let categoryItem: ICategory = {
        name: '',
        icon: <span>Icon</span>
    };

    let check: boolean = true;

    let data: INotes = getNoteItem();
    

    function getId(): Number {
        let searchId = window.location.pathname.replace('/', '');
        let id = Number(searchId)
        return id
    }

    function getNoteItem(): INotes {
        let id = getId();
        let result = notes.notes.filter(item => item.id === id);
 
        if (!result.length) {
            check = false;

            return {
                id: 0,
                name: '',
                category: '',
                dates: [],
                content: '',
                created: '',
                archive: false
            }
        }

        categoryItem = category.category.filter((item) => item.name === result[0].category)[0]
        
        return result[0]
    }

    function renderNoteItem(data: INotes, categoryItem: ICategory): JSX.Element {
        return (
            <div
                className={"container-note-item"}
            >
                <div
                    className={'content-list-notes-item-full'}
                >
                    <div
                        className={"content-list-notes-item-full-text"}
                    >
                        <div
                            className={"content-list-notes-item-full-name-category"}
                        >
                            <div
                                className={"content-list-notes-item-name-icon-container"}
                            >
                                {categoryItem.icon}
                            </div>
                            <h3>
                                {data.name}
                            </h3>
                            <span>|</span>
                            <span
                                className={"content-list-notes-item-full-name-category-span"}
                            >
                                {data.category}
                            </span>
                            <span>|</span>
                            <span
                                className={"content-list-notes-item-full-name-category-span"}
                            >
                                {"State: " + (data.archive ? "Archive" : "Active")}
                            </span>
                        </div>

                        <p>
                            {data.created}
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div
                        className={"content-list-notes-item-full-text-pre"}
                    >
                        <pre id="render">{data.content}</pre>
                    </div>
                </div>
            </div>
        )
    }

    if (check) {
        return (
            <>
                { renderNoteItem(data, categoryItem) }
            </>
        )
    }

    return (
        <PageNotFound />
    )
}

export default NotesItem;