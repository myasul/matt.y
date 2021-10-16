import * as React from 'react'
import { Link } from 'gatsby'

type Props = {
    title: string
}

export const Header = ({ title }: Props) => {
    return (
        <header>
            <div>
                <Link to='/'>{title}</Link>
            </div>
            <div>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </header>
    )
}