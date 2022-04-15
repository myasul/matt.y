import * as React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
    title: string
    description: string
}

export const LayoutMeta = ({ title, description }: Props) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name='robots' content='index, follow'/>
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Domine&family=Libre+Baskerville&family=DM+Mono&display=swap" rel="stylesheet" />
    </Helmet>
)
