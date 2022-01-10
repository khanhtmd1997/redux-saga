import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addPost, deletePost, getPosts, updatePost } from "../../redux/actions";
import { Form, Input, Button } from 'antd';
function Blog(props) {
    const [form] = Form.useForm()
    useEffect(() => {
        props.getPosts();
    }, []);

    function handleDelete(id) {
        props.deletePost(id);
        props.getPosts();
    }

    useEffect(() => {
        if (props.deletedPost) {
            props.getPosts();
        }
    }, [props.deletedPost])

    const [isForm, setIsForm] = useState(false)
    const [detail, setDetail] = useState({})
    function showForm(row) {
        console.log(row);
        if (row.id) setDetail(row)
        else setDetail({})
        setIsForm(true)
    }

    function handleSubmit(values) {
        const data = {
            ...values
        }
        if (detail.id) {
            data.id = detail.id
        }
        handleCreateUpdate(data)
        setIsForm(false)
    }

    function handleCreateUpdate(data) {
        if (data.id) {
            props.updatePost(data)
        } else props.addPost(data);

    }

    console.log('posts', props.posts);
    return (<div>
        <button onClick={() => showForm({})}>Add</button>
        {
            isForm ?
                <Form form={form} onFinish={handleSubmit} initialValues={{ ...detail }}>
                    <Form.Item name="username">
                        <Input placeholder="" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        {detail.id ? "edit post" : "add post"}
                    </Button>
                </Form> : null
        }
        {props.posts.data && props.posts.data.length > 0 ?
            props.posts.data.map((item, i) => (
                <div key={i}>
                    <h1>{item.username}</h1>
                    <button onClick={() => showForm(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))
            : null}


    </div>)
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return ({
        posts: state.getPosts.posts,
        // addedPost: state.addPost.post,
        deletedPost: state.deletePost.post,
        // updatedPost: state.updatePost.post
    })
};

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => {
        dispatch(getPosts());
    },
    addPost: (payload) => {
        dispatch(addPost(payload));
    },
    deletePost: (payload) => {
        dispatch(deletePost(payload));
    },
    updatePost: (payload) => {
        dispatch(updatePost(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);