import { ADD_GROUP, ADD_MEMBER, UPDATE_GROUP_NAME, DELETE_MEMBER } from '../utils/actions';

const GroupReducer = (state, action) => {
    switch (action.type) {
        case ADD_GROUP: {
            return {
                ...state,
                group: {
                    groupName: action.payload.groupName,
                    members: action.payload.members.map((item) => {
                        return {
                            id: item._id,
                            name: item.name,
                            email: item.email
                        };
                    })
                }
            };
        }
        case ADD_MEMBER: {
            return {
                ...state,
                group: {
                    ...state.group,
                    members: [
                        ...state.group.members,
                        {
                            id: '',
                            name: '',
                            email: action.payload.email
                        }
                    ]
                }
            };
        }
        case UPDATE_GROUP_NAME: {
            return {
                ...state,
                group: {
                    ...state.group,
                    groupName: action.payload.newName
                }
            };
        }
        case DELETE_MEMBER: {
            return {
                ...state,
                group: {
                    ...state.group,
                    members: state.group.members.filter((item) => item.email !== action.payload.email)
                }
            };
        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default GroupReducer;
