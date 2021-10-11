export const createProject = (project) => {
    // ideally, we should return an object but with thunk
    // we can return a function
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call to the DB then pause the dispatch
        const firesstore = getFirestore()
        const profile = getState().firebase.profile
        const authorID = getState().firebase.auth.uid

        firesstore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstname,
            authorLastName: profile.lastname,
            authorID: authorID,
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