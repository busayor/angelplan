import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect  } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const {project} = props
    // console.log(props)
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container centre">
                <p> Loadong content...</p>
            </div>
        )  
    }
   
}

const mapStateToProps = (state, ownProps) => { // we use ownProps here as we can't get access to props in this HoC
    // console.log(project)
    const id = ownProps.match.params.id
    const projects = state.firestoreCollections.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)
    (ProjectDetails)