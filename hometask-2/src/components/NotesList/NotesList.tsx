import React from "react";
import { Link } from "react-router-dom";
import { INotes } from '../../types/notes/notes';
import { ICategory } from '../../types/category/category';

interface IPropsNotesList {
    notes: INotes[] | [],
    category: ICategory[] | [],
    isArchive: boolean,
    updateNoteArchive(id: number): void,
    deleteNote(id: number): void
}

const NotesList: React.FC<IPropsNotesList> = (props) => {
    const { notes, category, isArchive, updateNoteArchive, deleteNote } = props;
    const [isVisible, setIsVisible] = React.useState([] as number[]);

    function setVisibleNote(id: number): void {

        if ((isVisible.indexOf(id)) + 1) {
            let result: number[] = isVisible.filter(item => item !== id);
            
            setIsVisible([...result]);

            return;
        }

        setIsVisible([...isVisible, id])
    }

    function getIconButton(): JSX.Element {

        let addArchiveIcon: JSX.Element = (<svg xmlns="http://www.w3.org/2000/svg" className="content-list-notes-item-actions-button-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd" />
        </svg>);

        let deleteArchiveIcon: JSX.Element = (<svg xmlns="http://www.w3.org/2000/svg" className="content-list-notes-item-actions-button-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
        </svg>);

        return isArchive ? deleteArchiveIcon : addArchiveIcon;
    }

    function getNotesIsArchive(): INotes[] {
        return notes.filter((item: INotes) => item.archive === isArchive);
    }
    function getIconCategory(name: string): JSX.Element {
        return category.filter((item: ICategory) => item.name === name)[0].icon;
    }

    function addOrDeleteArchive(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) {
        e.stopPropagation();
        updateNoteArchive(id)
    }

    function deleteNoteItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) {
        e.stopPropagation();
        deleteNote(id)
    }

    function notesItems(): JSX.Element | JSX.Element[] {
        let iconArchiveButton: JSX.Element = getIconButton();
        let list: INotes[] = getNotesIsArchive();

        if (!list.length) {

            return <p className={"text-empty"}>Is Empty</p>
            
        }

        return list.map((item: INotes) => {

            let iconCategory: JSX.Element = getIconCategory(item.category);

            return (
                <div
                    key={item.id}
                    className={"container-content-list-notes-items"}
                >
                    <div
                        className={"content-list-notes-item"}
                        onClick={() => setVisibleNote(item.id)}
                    >
                        <div
                            className={"w-16 first-content-position content-list-notes-item-text"}
                        >
                            {iconCategory}
                            <span
                                className={"content-list-notes-item-text-span"}
                            >
                                {item.name}
                            </span>
                        </div>
                        <div
                            className={"w-16 content-list-notes-item-text"}
                        >
                            <span
                                className={"content-list-notes-item-text-span"}
                            >
                                {item.created}
                            </span>
                        </div>
                        <div
                            className={"w-16 content-list-notes-item-text"}
                        >
                            <span
                                className={"content-list-notes-item-text-span"}
                            >
                                {item.category}
                            </span>
                        </div>
                        <div
                            className={"w-16 content-list-notes-item-text"}
                        >
                            <span
                                className={"content-list-notes-item-text-span"}
                            >
                                {item.content}
                            </span>
                        </div>
                        <div
                            className={"w-16 content-list-notes-item-text"}
                        >
                            <span
                                className={"content-list-notes-item-text-span"}
                            >
                                {item.dates.join(',')}
                            </span>
                        </div>
                        <div
                            className={"w-16 content-list-notes-item-text"}
                        >
                            <Link 
                                to={'edit/' + item.id}
                                className={"content-list-notes-item-actions-button"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={"content-list-notes-item-actions-button-icon"}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </Link>
                            <button
                                className={"add-archive content-list-notes-item-actions-button add-or-delete-archive"}
                                title="Add Archive"
                                onClick={(e) => addOrDeleteArchive(e, item.id)}
                            >
                                {iconArchiveButton}
                            </button>
                            <button
                                className={"content-list-notes-item-actions-button delete-item"}
                                title="Delete"
                                onClick={(e) => deleteNoteItem(e, item.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={"content-list-notes-item-actions-button-icon"}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={"container-visible"}
                            style={{
                                transform: 'rotate(' + (isVisible.indexOf(item.id) === -1 ? '0deg' : '180deg') + ')'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={"container-visible-icon"}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={'content-list-notes-item-full' + (isVisible.indexOf(item.id) === -1 ? ' display-none' : '')}
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
                                    {iconCategory}
                                </div>
                                <h3>
                                    {item.name}
                                </h3>
                                <span>|</span>
                                <span
                                    className={"content-list-notes-item-full-name-category-span"}
                                >
                                    {item.category}
                                </span>
                            </div>

                            <p>
                                {item.created}
                            </p>
                        </div>
                        <div
                            className={"content-list-notes-item-full-text-pre"}
                        >
                            <pre id="render">{item.content}</pre>
                        </div>
                    </div>
                </div>
            )
        })
        
    }
    
    return (
        <>  
            { notesItems() }
        </>
    )
}

export default NotesList;