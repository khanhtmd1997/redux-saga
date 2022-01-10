import { DELETED_POST } from "../actions/actionType";

const initialState = {
    post: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETED_POST: {
            return {
                ...state,
                post: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}