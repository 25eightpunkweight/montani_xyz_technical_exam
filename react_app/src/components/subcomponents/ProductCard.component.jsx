import React from 'react'
import { Card, Button } from 'react-bootstrap';

// import Styled from './.styled'

function ProductCard(props) {
    const {title} = props;
    return (
        <Card style={{textAlign: 'left', color: 'white', background: 'rgba(1, 2, 3, 0)'}}>
            <Card.Img variant="top" src={require('../../assets/xyz_assets/Assets/' + title.toLowerCase().replace(/ /g,"_") + '.png')}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button>View Book Details ›</Button>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;