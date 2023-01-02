import React, { useState } from 'react'
import { Collapse } from '../Collapse/index'
import { SectionCollapsibleStyled } from './style'

interface SectionType {
    title: string;
    // children: JSX.Element;
    content: string;
}

function SectionCollapsible(props : SectionType) {

    const {title, content} = props

    const [isOpen, setIsOpen] = useState(false)

    const handlerCollapser = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SectionCollapsibleStyled>

            <div className='sectionCollapsible_title' onClick={handlerCollapser}>
                <p><strong>{title}</strong></p>
                <div> {'>'} </div>
            </div>

            <Collapse isOpened={isOpen} transition='350'>
                <div>
                    {content}
                </div>
            </Collapse>

        </SectionCollapsibleStyled>
  )
}


export { SectionCollapsible }
