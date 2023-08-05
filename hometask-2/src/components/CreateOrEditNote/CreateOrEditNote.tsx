import React from "react";
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PageNotFound from '../PageNotFound/PageNotFound';
import { NotesActionsCreator } from "../../store/slices/notes/notes";
import { RootState } from "../../types/store/store";
import { INotes, ICreatedOrUpdateNoteData } from "../../types/notes/notes";
import { ICategory } from "../../types/category/category";
import '../../assets/styles/created.css';

interface IFormCreateOrEdit {
    name: string,
    title: string,
    placeholderTitle: string
}

const CreateOrEditNote: React.FC = () => {
    const { notes, category } = useSelector(({ notes, category }: RootState) => ({
        notes, category
    }));

    let created: boolean = true;
    let check: boolean = true
    let id: number | null = checkPath();
    let data: INotes |  ICreatedOrUpdateNoteData = created ? { name: '', content: '', category: category.category[0].name} : getNote(notes.notes, id)

    const [name, setName] = React.useState(data.name || '');
    const [content, setContent] = React.useState(data.content || '');
    const [select, setSelect] = React.useState(data.category || category.category[0].name);

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch();

    const createNoteToState = (data: ICreatedOrUpdateNoteData) => dispatch(NotesActionsCreator.createNoteToState(data));
    const updateNoteToState = (data: ICreatedOrUpdateNoteData) => dispatch(NotesActionsCreator.updateNoteToState(data));

    function checkPath (): number | null {

        if (window.location.pathname === '/create') {
    
            created = true;
            
            return null;
        }
        
        let searchId = window.location.pathname.replace('/edit/','')

        let id = searchId.length ? Number(searchId) : null;
    
        created = false;

        return id
    }
    function getNote(notes: INotes[], id: number | null): INotes | ICreatedOrUpdateNoteData {

        let result: INotes[] = notes.filter((item: INotes) => item.id === id);
    
        if (!result.length) {
    
            check = false;
    
            return { name: '', content: '', category: ''};
        }
    
        return result[0];
    }

    let form: IFormCreateOrEdit = created ? {
        title: 'Create New Note',
        name: 'Add new note',
        placeholderTitle: 'New'
    } : {
        title: 'Edit',
        name: 'Save edit note',
        placeholderTitle: 'Edit'
    }; 
    
    function createOrEditNote() {
        
        let noteData: ICreatedOrUpdateNoteData = {
            name: name,
            category: select,
            content: content
        }

        if (created) {

            createNoteToState(noteData);

            navigate('../', { replace: true })

            return;

        }
        
        noteData.id = data.id;

        updateNoteToState(noteData);

        navigate('../', { replace: true })
    }

    if (check) {
        return (
            <div className={"container-create"}>
                <h1 className={"container-create-title"}>
                    {form.title}
                    <Link to="/" id="close-form">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </h1>
                <div className={"container-create-item"}>
                    <label className={"container-create-item-label"} htmlFor="name-category">Title</label>
                    <input
                        type="text"
                        id="name-create-note"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={"Default title: \"" + form.placeholderTitle + " Note\""}
                    />
                </div>
                <div className={"container-create-item"}>
                    <label className={"container-create-item-label"} htmlFor="select-category">Category</label>
                    <select
                        className={'container-create-item-select'}
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                    >
                        {
                            category.category.map((item: ICategory) => {
                                return <option key={'category' + item.name} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                </div>

                <div className={"container-create-item"}>
                    <textarea
                        className={"container-create-item-textarea"}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        id="content-create-note"
                        cols={30}
                        rows={10}
                    />
                </div>
                <button 
                    className={"button-create"}
                    onClick={() => createOrEditNote()}
                >
                    {form.name}
                </button>
            </div>
        )
    }
    
    return <PageNotFound />
}

export default CreateOrEditNote;