import { Avatar, Col, Row, Tooltip, Typography } from "antd";
import { useLayoutEffect, useState } from "react";
import { TransparentBtnsAction } from "../Buttons";

function useColumns(status) {
    const [columns, setcolumns] = useState([])
    const [data, setdata] = useState([])
    useLayoutEffect(() => {
        if (status === "notice") {
            const cols = [
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
                    width: 60,
                },
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    render: (name) => {
                        return (
                            <Typography>
                                <Typography.Title
                                    className="name"
                                    level={5}
                                    ellipsis={{ rows: 1 }}
                                >
                                    {name}
                                </Typography.Title>
                            </Typography>
                        );
                    },
                    width: 120,
                },
                {
                    title: "Date",
                    dataIndex: "date",
                    render: (date) => <div className="date">{date}</div>,
                    key: "date",
                    width: 120,
                },
                {
                    title: "Email",
                    dataIndex: "email",
                    key: "email",
                    ellipsis: {
                        showTitle: false,
                    },
                    width: 160,

                    render: (email) => (
                        <Tooltip placement="topLeft" title={email}>
                            <div className="amount amount"> {email}</div>
                        </Tooltip>
                    ),
                },
                {
                    title: "Subject",
                    dataIndex: "subject",
                    key: "subject",
                    ellipsis: { showTitle: true, },
                    width: 150,
                    render: (subject) => (
                        <Tooltip placement="topLeft" title={subject}>
                            <div className="account amount">{subject}</div>
                        </Tooltip>
                    ),
                },
                {
                    title: "Message",
                    dataIndex: "message",
                    key: "message",
                    ellipsis: { showTitle: true, },
                    width: 200,
                    render: (message) => (
                        <Tooltip placement="topLeft" title={message}>
                            <div className="account amount">{message}</div>
                        </Tooltip>
                    ),
                },
                {
                    title: "Completed",
                    dataIndex: "completed",
                    key: "completed",
                    ellipsis: { showTitle: true, },
                    width: 110,
                    render: (completed) => (
                        completed?.completed ? <Tooltip placement="topLeft" title={completed}>
                            <div className="account amount">{completed}</div>
                        </Tooltip>
                            :
                            <TransparentBtnsAction className="green" text={"complete"} onClick={() => setcomplete(completed?._id)} />
                    ),
                },

            ];
            setcolumns(cols)
            const d = [
                {
                    serial: 1,
                    key: 1,
                    name: "TEST",
                    date: new Date().toDateString(),
                    email: "test@gmail.com",
                    subject: "test subject",
                    message: "test messgae",
                    completed: false,
                },
                {
                    serial: 2,
                    key: 2,
                    name: "TEST2",
                    date: new Date().toDateString(),
                    email: "test2@gmail.com",
                    subject: "test subject",
                    message: "test messgae",
                    completed: false,
                },
                {
                    serial: 3,
                    key: "3",
                    name: "TEST3",
                    date: new Date().toDateString(),
                    email: "test2@gmail.com",
                    subject: "test subject",
                    message: "test messgae",
                    completed: false,
                },
                {
                    serial: 4,
                    key: "4",
                    name: "John Brown 3",
                    date: new Date().toDateString(),
                    email: "test2@gmail.com",
                    subject: "test subject",
                    message: "test messgae",
                    completed: false,
                },
                {
                    serial: 5,
                    key: "5",
                    name: "John Brown 3",
                    date: new Date().toDateString(),
                    email: "test2@gmail.com",
                    subject: "test subject",
                    message: "test messgae",
                    completed: false,
                },
            ];
            setdata(d)
        }
        else if (status === "user" || status === "post") {
            const cols = [
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
                    width: 100,

                    render: (id) => (
                        <Tooltip placement="topLeft" title={id}>
                            <div className="amount" > {id}</div>
                        </Tooltip>
                    ),
                },
                {
                    title: "Total Likes",
                    dataIndex: "likes",
                    key: "likes",
                    ellipsis: {
                        showTitle: false,
                    },
                    width: 90,

                    render: (likes) => (
                        <Tooltip placement="topLeft" title={likes}>
                            <div className="amount" > {likes}</div>
                        </Tooltip>
                    ),
                },
                {
                    title: "Total Comments",
                    dataIndex: "comments",
                    key: "comments",
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
                                <Col span={24} className="transparent red">
                                    <TransparentBtnsAction className="red" text={"delete"} />
                                </Col>
                            </Row>
                        );
                    },
                },
            ];

            if (status === "user") {
                const find = cols.findIndex(e => e.dataIndex === "id")
                const newarr = cols.slice(0, find);
                newarr.push(
                    {
                        title: "Total Posts",
                        dataIndex: "posts",
                        key: "posts",
                        ellipsis: {
                            showTitle: false,
                        },
                        width: 90,

                        render: (posts) => (
                            <Tooltip placement="topLeft" title={posts}>
                                <div className="amount" > {posts}</div>
                            </Tooltip>
                        ),
                    },
                )
                newarr.push(columns.slice(find + 1, 20))
            }
            setcolumns(cols)
            const d = [
                {
                    serial: 1,
                    key: "1",
                    name: { name: "John Brown", img: null },
                    date: `01/02/22`,
                    likes: 100,
                    comments: 200,
                    posts: 20,
                    id: "121321314",
                    result: "",
                },
                {
                    serial: 2,
                    key: "2",
                    name: { name: "John Brown 2", img: null },
                    date: `01/02/22`,
                    likes: 100,
                    comments: 200,
                    posts: 20,
                    id: "121321314",
                    result: "",
                },
                {
                    serial: 3,
                    key: "3",
                    name: { name: "John Brown 3", img: null },
                    date: `01/02/22`,
                    likes: 100,
                    comments: 200,
                    posts: 20,
                    id: "121321314",
                    result: "",
                },
                {
                    serial: 4,
                    key: "4",
                    name: { name: "John Brown 3", img: null },
                    date: `01/02/22`,
                    likes: 100,
                    comments: 200,
                    posts: 20,
                    id: "121321314",
                    result: "",
                },
                {
                    serial: 5,
                    key: "5",
                    name: { name: "John Brown 3", img: null },
                    date: `01/02/22`,
                    likes: 100,
                    comments: 200,
                    posts: 20,
                    id: "121321314",
                    result: "",
                },
            ];
            setdata(d)
        }
        return () => {
            setdata([])
            setcolumns([])
        }
    }, [status])

    const setcomplete = async () => { }
    return {
        columns,
        data
    }

}

export default useColumns