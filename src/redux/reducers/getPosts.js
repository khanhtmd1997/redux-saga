import { GOT_POSTS } from "../actions/actionType";

const initialState = {
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_POSTS: {
            return {
                ...state,
                posts: action.payload,
            };
        }
        default: {
            return { ...state };
        }
    }
}