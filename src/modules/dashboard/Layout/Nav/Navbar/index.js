import { Button, Col, Popover, Row } from "antd";
import React from "react";
import Icons from "../../../../../common/Icons";
function Navbar() {
  return (
    <Row
      className="adminNav"
      gutter={[20, 20]}
      style={{ justifyContent: "flex-end" }}
    >
      <Col xl={14} md={20} sm={24} xs={24} className="rightbar">
        <Row align={"middle"} justify={"end"}>
          <Col span={6}>
            <Popover content={"Logout"}>
              <Button type="primary">
                <Icons icon="logout" className={"organge"} />
                Logout
              </Button>
            </Popover>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Navbar;
