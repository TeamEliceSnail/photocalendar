import React from 'react'
import Wrapper from './navFormStyle'
import NavButton from './navButton'

const NavForm = () => {
    const buttonList = [
        {id: 1, title: "My Calendar"},
        {id: 2, title: "Favorites"},
        {id: 3, title: "Delete Item"},
        {id: 4, title: "Profile"},
    ]

    return (
        <Wrapper>
            {buttonList.map(x => <NavButton title={x.title}/>)}
        </Wrapper>
    )
}

export default NavForm