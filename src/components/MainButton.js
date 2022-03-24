import React, { useState } from 'react'
import { Button } from './styles/MainButton.styled'
import { ReactComponent as Arrow } from '../media/images/arrow.svg'

const MainButton = ({ content, type, width }) => {
    const [active, setActive] = useState(true)

    const handleClick = () => {
        setActive(!active)
    }
    return (
        <Button
            onClick={() => handleClick()}
            active={active}
            type={type}
            width={width}
        >
            {content ? content : <Arrow fill={active ? '#F6F6F6' : '#F53855'} />}
        </Button>
    )
}

export default MainButton