import { Container } from '@material-ui/core'
import React from 'react'
import Graphic from './Graphic/Graphic'
import Multimedia from './Multimedia/Multimedia'
import Websites from "./Websites/Website"

export default function Projects() {
    return (
        <Container>
            <Websites />
            <Graphic />
            <Multimedia />
        </Container>
    )
}
