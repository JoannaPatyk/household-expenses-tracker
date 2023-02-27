import {
    ADD_GROUP,
    INVITE_USER,
    ADD_INVITATIONS,
    UPDATE_GROUP_NAME,
    DECLINE_USER_INVITATION,
    REMOVE_USER,
    ACCEPT_INVITATION,
    DECLINE_INVITATION
} from '../utils/actions';

const GroupReducer = (state, action) => {
    switch (action.type) {
        case ADD_GROUP: {
            return {
                ...state,
                group: {
                    name: action.payload.name,
                    isActive: action.payload.isActive,
                    owner: action.payload.owner,
                    members: action.payload.members.map((item) => {
                        return {
                            id: item._id,
                            name: item.name,
                            email: item.email
                        };
                    }),
                    invitations: action.payload.invitations.map((item) => {
                        return {
                            id: item._id,
                            name: item.name,
                            email: item.email
                        };
                    })
                }
            };
        }
        case UPDATE_GROUP_NAME: {
            return {
                ...state,
                group: {
                    ...state.group,
                    name: action.payload.newName
                }
            };
        }
        case INVITE_USER: {
            return {
                ...state,
                group: {
                    ...state.group,
                    invitations: [...state.group.invitations, { id: '', name: '', email: action.payload.email }]
                }
            };
        }
        case ADD_INVITATIONS: {
            return {
                ...state,
                invitations: action.payload.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        owner: {
                            id: item.owner._id,
                            name: item.owner.name,
                            email: item.owner.email
                        }
                    };
                })
            };
        }
        case DECLINE_USER_INVITATION: {
            return {
                ...state,
                invitations: state.invitations.filter((item) => item.email !== action.payload.email)
            };
        }
        case REMOVE_USER: {
            return {
                ...state,
                group: {
                    ...state.group,
                    members: state.group.members.filter((item) => item.email !== action.payload.email)
                }
            };
        }
        case ACCEPT_INVITATION: {
            return {
                ...state,
                group: {
                    ...state.group
                }
            };
        }
        case DECLINE_INVITATION: {
            return {
                ...state,
                group: {
                    ...state.group
                }
            };
        }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default GroupReducer;
