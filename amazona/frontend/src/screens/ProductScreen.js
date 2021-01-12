import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import data from '../data'

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div> Product Not Found...</div>
    }
    return (
        <Container>
            <Row>
                <Col sm={6} md={4} className="bg-warning">
                    <img className="large" src={product.image} alt={product.name} />
                </Col>
                <Col sm={6} md={4} className="bg-primary">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </Col>
                <Col sm={6} md={4} className="bg-danger">
                    sm=6 md=4
                </Col>
            </Row>
        </Container>
    )
}
