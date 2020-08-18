import React from 'react';
import Row from 'react-bootstrap/Row';
import { menuSize, menuFont, greyColor } from '../style/index';

const Menu = () => {
    const style = {
        ...menuFont,
        ...greyColor
    }
    return (
        <Row style={menuSize} className="d-flex justify-content-center shadow bg-white rounded">
            <header className="d-flex align-items-center">
                <h1 style={style}>
                    Menu
                </h1>
            </header>
        </Row>
    )
}

export default Menu;