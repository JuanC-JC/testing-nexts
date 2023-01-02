import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface CollapseType {
    isOpened: boolean;
    transition: string;
    children: JSX.Element;
    
}
//height : ${({ height }) => `${height}px`};
//  transition: ${({ transition }) => `height ${transition}ms`};
const CollapseStyled = styled.div`
    height : ${({ height }) => `${height}px`};
    overflow: hidden;
    transition: ${({ transition }) => `height ${transition}ms`};
`

function Collapse(props : CollapseType) {

	const { isOpened = false, transition = 500, children } = props

	const collapseBodyRef = useRef<HTMLDivElement>(null)
	const [height , setHeight] = useState(0)

	useEffect(() => {

		if (collapseBodyRef.current) {

			const currentHeight = collapseBodyRef.current.scrollHeight

			if(isOpened){
				setTimeout(() => {
					collapseBodyRef.current.style.height = 'auto'
				}, (transition));
			}
			else{
				collapseBodyRef.current.removeAttribute('style')
			}

			setTimeout(() => {
				setHeight(isOpened ? currentHeight : 0)
			}, 100);


		}

	}, [isOpened])


	return (
		<CollapseStyled
			ref={collapseBodyRef}
			isOpened={isOpened}
			height={height}
			transition={transition}
		>
			{children}
		</CollapseStyled>
	)
}


export { Collapse }