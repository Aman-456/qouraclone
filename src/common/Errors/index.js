import { Button, Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { useNavigate } from "react-router-dom"

function Error404() {
    const navigate = useNavigate()
    const goback = () => navigate(-1)
    return (
        <Fragment>
            <Row className='ErrorPage SectionPadding' justify={"center"}>
                <Col lg={15} md={18} sm={24} xs={24}>
                </Col>
                <Col span={24} className="headingcol">
                    <h2>
                        oops! The page you requested was not found!
                    </h2>
                </Col>
                <Col span={24} className="button-col" style={{ marginTop: "20px" }}>
                    <Button className='btn' onClick={goback}>
                        Back to Home
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Error404