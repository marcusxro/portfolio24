import React from 'react'
import {Helmet} from "react-helmet"

interface metaTypes {
    description: string;
    title: string;
}

const MetaDecorator: React.FC<metaTypes> = ({title, description}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`${description}`} />
            </Helmet>
        </div>
    )
}

export default MetaDecorator
