import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function ProductScreen() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
        </Container>
    )
}
