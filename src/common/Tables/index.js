import { Col, Row, Table } from "antd";
import React, { Fragment } from "react";
import useColumns from "./noticeCoumns";

function UserTableWrapper({ text, status }) {
  const { data, columns } = useColumns(status)
  return (
    <Fragment>
      <Row gutter={[0, 30]} className="tablerow">
        <Col span={24}>
          <Row style={{ width: "100%" }} justify={"space-between"}>
            <Col lg={12} md={24} sm={24} xs={24} className="searchheading">
              {text || "Your Text"}
            </Col>
            <Col lg={12} md={24} sm={24} xs={24} className="searchbarcol">
              {/* <TableForm /> */}
            </Col>
          </Row>
        </Col>
        <Col span={24} className="tablecol">
          <Table columns={columns} dataSource={data} scroll={{ x: 767 }} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default UserTableWrapper;
