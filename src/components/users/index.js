import { useEffect } from "react";
import { connect } from "react-redux";
import { UsersAction } from "../../redux-saga/actions";
import { Table, Space, Tooltip, Button, Modal } from 'antd';
import { ExclamationCircleOutlined, SearchOutlined, FormOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { UsersRequests } from "../../redux-saga/sagas/requests";

function Users({ users, actions }) {
    const columns = [
        {
            title: "Họ và tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Tác vụ",
            key: "action",
            render: (row, object, index) => (
                <Space size="middle" key={index}>
                    <Tooltip title="Sửa dữ liệu">
                        <Button type="primary" className="action-table" icon={<FormOutlined />} onClick={() => false}></Button>
                    </Tooltip>
                    <Tooltip title="Xóa dữ liệu">
                        <Button type="default" className="action-table" icon={<DeleteOutlined />} onClick={() => confirm(row.id)}></Button>
                    </Tooltip>
                </Space>
            )
        }
    ]
    useEffect(() => {
        actions.getUsers()
        // eslint-disable-next-line
    }, [actions.getUsers]);

    function deleteUser(id) {
        actions.removeUser(id)
    }

    function confirm(id) {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Xác nhận xóa',
            okText: 'Đồng ý',
            onOk: () => { deleteUser(id) },
            cancelText: 'Hủy',
        });
    }
    return (
        <>
            {users.loading && <h1>Loading...</h1>}

            {!users.loading && users.error ? <h1>{users.error}</h1>
                : <Table
                    rowKey={obj => obj.id}
                    columns={columns}
                    dataSource={users.users}
                    pagination={{ defaultPageSize: 20, showSizeChanger: true }}

                />}
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        users: state.users,
    })
}

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getUsers: (payload) => {
            dispatch(UsersAction.getUsers(payload));
        },
        removeUser: (id) => {
            UsersRequests.removeUser(id);
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);