import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
    name: string
    description: string
}

export const AboutMeta = ({ name, description }: Props) => {
    return (
        <Helmet>
            <title>About {name}</title>
            <meta name='description' content={description} />
        </Helmet>
    )
}
