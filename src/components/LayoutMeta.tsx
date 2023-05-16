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
        <meta name='robots' content='index, follow' />
        <html lang="en" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Domine&family=Libre+Baskerville&display=swap" rel="stylesheet" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
)
