export const createProject = (project) => {
    // ideally, we should return an object but with thunk
    // we can return a function
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call to the DB then pause the dispatch
        const firesstore = getFirestore()
        firesstore.collection('projects').add({
            ...project,
            authorFirstName: 'Tunde',
            authorLastName: 'Cole',
            authorID: 12345,
            createdAt: new Date()
        }).then((res) => {
            
            dispatch({type: 'CREATE_PROJECT', project: project})
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
}