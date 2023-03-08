import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';
import reducer from '../reducers/GroupReducer';
import { useUserContext } from './UserContext';
import {
    ADD_GROUP,
    UPDATE_GROUP_NAME,
    INVITE_USER,
    ADD_INVITATIONS,
    DECLINE_USER_INVITATION,
    REMOVE_USER,
    ACCEPT_INVITATION,
    DECLINE_INVITATION
} from '../utils/Actions';

const initialState = {
    group: {},
    invitations: []
};

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isLogged } = useUserContext();

    const fetchGroup = useCallback(async () => {
        try {
            const response = await axios.get(`${apiConfig.api}/group`);
            const data = response.data;

            addGroup(data);
        } catch (error) {
            console.error('error: ', error.response);
        }
    }, []);

    const fetchInvitations = useCallback(async () => {
        try {
            const response = await axios.get(`${apiConfig.api}/group/invitations`);
            const data = response.data;

            addInvitations(data);
        } catch (error) {
            console.error('error: ', error.response);
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            fetchGroup();
            fetchInvitations();
        }
    }, [isLogged, fetchGroup, fetchInvitations]);

    useEffect(() => {
        const getDataInterval = setInterval(async () => {
            if (isLogged) {
                if (isLogged) {
                    fetchGroup();
                    fetchInvitations();
                }
            }
        }, 180000);

        return () => {
            clearInterval(getDataInterval);
        };
    }, [isLogged, fetchGroup, fetchInvitations]);

    const addGroup = (group) => {
        dispatch({ type: ADD_GROUP, payload: group });
    };

    const updateGroupName = async (newName) => {
        try {
            await axios.patch(`${apiConfig.api}/group`, {
                newName: newName
            });

            dispatch({
                type: UPDATE_GROUP_NAME,
                payload: { newName }
            });

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    const inviteUser = async (email) => {
        try {
            await axios.post(`${apiConfig.api}/group/invite_user`, { email });
            dispatch({ type: INVITE_USER, payload: { email } });
            fetchGroup();

            return true;
        } catch (error) {
            console.error('error: ', error.response);

            if (error.response.status === 404) {
                return false;
            }
        }
    };

    const addInvitations = (invitations) => {
        dispatch({ type: ADD_INVITATIONS, payload: invitations });
    };

    const declineUserInvitation = async (email) => {
        try {
            await axios.post(`${apiConfig.api}/group/decline_user_invitation`, { email });
            dispatch({ type: DECLINE_USER_INVITATION, payload: email });
            fetchGroup();

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    const removeUser = async (email) => {
        try {
            await axios.post(`${apiConfig.api}/group/remove_user`, { email });
            dispatch({ type: REMOVE_USER, payload: email });
            fetchGroup();

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    const acceptInvitation = async (id) => {
        try {
            await axios.post(`${apiConfig.api}/group/accept_invitation`, { groupId: id });
            dispatch({ type: ACCEPT_INVITATION, payload: id });
            fetchInvitations();

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    const declineInvitation = async (id) => {
        try {
            await axios.post(`${apiConfig.api}/group/decline_invitation`, { groupId: id });
            dispatch({ type: DECLINE_INVITATION, payload: id });
            fetchInvitations();

            return true;
        } catch (error) {
            console.error('error: ', error.response);
            return false;
        }
    };

    return (
        <GroupContext.Provider
            value={{
                ...state,
                inviteUser,
                updateGroupName,
                declineUserInvitation,
                removeUser,
                acceptInvitation,
                declineInvitation
            }}
        >
            {children}
        </GroupContext.Provider>
    );
};

GroupProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useGroupContext = () => {
    return useContext(GroupContext);
};
