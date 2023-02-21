import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import apiConfig from '../apiConfig';
import reducer from '../reducers/GroupReducer';
import { useUserContext } from './UserContext';
import { ADD_GROUP, ADD_MEMBER, UPDATE_GROUP_NAME, DELETE_MEMBER } from '../utils/actions';

const initialState = {
    group: {}
};

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isLogged } = useUserContext();

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await axios.get(`${apiConfig.api}/group`);
                const data = response.data;

                addGroup(data);
            } catch (error) {
                console.error('error: ', error.response);
            }
        };

        const getDataInterval = setInterval(async () => {
            if (isLogged) {
                fetchGroup();
            }
        }, 1000);

        return () => {
            clearInterval(getDataInterval);
        };
    }, [isLogged]);

    const addGroup = (group) => {
        dispatch({ type: ADD_GROUP, payload: group });
    };

    const addMember = async (email) => {
        try {
            await axios.post(`${apiConfig.api}/group/add_member`, { email });

            dispatch({ type: ADD_MEMBER, payload: { email } });
        } catch (error) {
            console.error('error: ', error.response);
        }
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
        } catch (error) {
            console.error('error: ', error.response);
        }
    };

    const deleteMember = async (email) => {
        try {
            await axios.post(`${apiConfig.api}/group/delete_member`, { email });

            dispatch({ type: DELETE_MEMBER, payload: email });
        } catch (error) {
            console.error('error: ', error.response);
        }
    };

    return (
        <GroupContext.Provider
            value={{
                ...state,
                addMember,
                updateGroupName,
                deleteMember
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
