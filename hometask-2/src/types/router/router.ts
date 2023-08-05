enum RouterPath {
    HOME = '/',
    NOTES_ITEM = '/:id',
    CREATE_NOTE = '/create',
    EDIT_NOTE = '/edit/:id',
    PAGE_NOT_FOUND = '*'
}

export { RouterPath }