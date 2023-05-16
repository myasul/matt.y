import React from 'react'

import { Title, H3, SubTitle, H4 } from './Headings'
import { Paragraph } from './Paragraph'
import { UnorderedList } from './UnorderedList'
import { List } from './List'

export default {
    h1: (props: any) => <Title {...props} />,
    h2: (props: any) => <SubTitle {...props} />,
    h3: (props: any) => <H3 {...props} />,
    h4: (props: any) => <H4 {...props} />,
    p: (props: any) => <Paragraph {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    li: (props: any) => <List {...props} />
}
