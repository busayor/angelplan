import React from 'react'
import moment from 'moment'

const ProjectSummary = (project) => {
    console.log(project)
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.project.title}</span>
                    <p>Posted by {project.project.authorFirstName + ' ' + project.project.authorLastName}</p>
                    <p className="grey-text">{moment(project.project.createdAt.toDate()).calendar()}</p>
                </div>
        </div>
    )
}

export default ProjectSummary

