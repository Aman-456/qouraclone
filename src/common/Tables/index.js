import React, { Fragment } from "react";
import { Avatar, Col, Row, Table, Tooltip, Typography } from "antd";
import TableForm from "./Form";
import { useSelector } from "react-redux";
import Icons from "../Icons";
import { TransparentBtnsAction } from "../Buttons";

function UserTableWrapper({ text, showuser }) {
  const {
    filtervalue, // data
  } = useSelector((state) => state.data);

  // console.log({ filtervalue });

  const columns = [
    {
      title: "Sr#",
      dataIndex: "serial",
      key: "serial",
      render: (text) => {
        return (
          <Tooltip placement="topLeft" title={text}>
            <div className="serial">{text || "1"}</div>
          </Tooltip>
        );
      },
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: ({ name, img }) => {
        return (
          <Row align={"middle"} gutter={[15, 5]} className="nameavatar">
            <Col span={5}>
              <Avatar src={img ? img : undefined} />
            </Col>
            <Col span={17}>
              <Typography>
                <Typography.Title
                  className="name"
                  level={5}
                  ellipsis={{ rows: 1 }}
                >
                  {name}
                </Typography.Title>
              </Typography>
            </Col>
          </Row>
        );
      },
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => <div className="date">{date}</div>,
      key: "date",
      width: 110,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ellipsis: {
        showTitle: false,
      },
      width: 150,

      render: (id) => (
        <Tooltip placement="topLeft" title={id}>
          <div className="amount" > {id}</div>
        </Tooltip>
      ),
    },

    {
      title: "Total Posts",
      dataIndex: "qno",
      key: "qno",
      ellipsis: {
        showTitle: false,
      },
      width: 90,

      render: (qno) => (
        <Tooltip placement="topLeft" title={qno}>
          <div className="amount" > {qno}</div>
        </Tooltip>
      ),
    },
    {
      title: ("Actions"),
      dataIndex: "result",
      key: "result",
      ellipsis: {
        showTitle: false,
      },
      width: 150,
      render: (result) => {
        return (
          <Row
            className="result amount"
            justify={"space-between"}
            align={"middle"}
          >
            {result !== "active" ? (
              <Col span={24}>
                <TransparentBtnsAction className="green" text={"active"} />
              </Col>
            ) : (
              <Col span={24} className="transparent red">
                <TransparentBtnsAction className="red" text={"block"} />
              </Col>
            )}
          </Row>
        );
      },
    },
  ];


  const data = [
    {
      name: ""
    },

  ];

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
