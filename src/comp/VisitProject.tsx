import React from 'react'

interface VisitProjectProps {
    linkToProject: string
}

const VisitProject: React.FC<VisitProjectProps> = ({ linkToProject }) => {

    console.log(linkToProject)

    const navigateToOtherPage = () => {
        window.open(linkToProject, '_blank')
    }

    return (
        <div className="item" onClick={() => { navigateToOtherPage() }}>
            VISIT
        </div>
    )
}

export default VisitProject

{/* <VisitProject linkToProject={MyWorks[4].link} /> */}