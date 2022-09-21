import React from "react"
import {Thumb,Title} from './Section.styled'
export const Section = ({title,children})=>{
    return(
        <Thumb>
            <Title>{title}</Title>
            {children}
        </Thumb>
    )
}