import React, { useEffect, useState } from 'react';
import Wrapper from '../../assets/wrappers/Group';
import Button from '../../components/Button';
import { CiCircleRemove } from 'react-icons/ci';
import FormRowInput from '../../components/FormRowInput';
import { useGroupContext } from '../../context/GroupContext';

function Group() {
    const [newGroupName, setNewGroupName] = useState('Twoja grupa');
    const [newMember, setNewMember] = useState('');
    const { group, updateGroupName, addMember, deleteMember } = useGroupContext();

    useEffect(() => {
        setNewGroupName(group.groupName);
    }, [group.groupName]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleSave = () => {
        updateGroupName(newGroupName);
    };

    const handleAdd = () => {
        addMember(newMember);
    };

    const handleNameChange = (event) => {
        setNewGroupName(event.target.value);
    };

    const handleMemberChange = (event) => {
        setNewMember(event.target.value);
    };

    return (
        <Wrapper>
            <div className="group-container">
                <div className="group-info-container">
                    <h1>
                        Aktualna nazwa grupy: <span>{group.groupName}</span>
                    </h1>
                    <h3>Członkowie grupy:</h3>
                    <div className="members">
                        {group.members.map((item, index) => {
                            return (
                                <div className="member" key={index}>
                                    {index === 0 ? (
                                        <p>{item.email}</p>
                                    ) : (
                                        <>
                                            <p>{item.email}</p>
                                            <CiCircleRemove
                                                className="delete-btn"
                                                onClick={() => deleteMember(item.email)}
                                            />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <form id="form" className="form-container" onSubmit={handleSubmit}>
                    <h1>Edytuj ustawienia grupy</h1>
                    <div className="edit-group-container">
                        <h3>Zmień nazwę grupy:</h3>
                        <FormRowInput
                            id="groupNameInput"
                            value={newGroupName}
                            type="text"
                            placeholder="nowa nazwa"
                            onChange={handleNameChange}
                        />
                        <Button id="btn-save" type="submit" version="hero" onClick={handleSave}>
                            zapisz
                        </Button>

                        <h3>Dodaj nowego członka grupy:</h3>
                        <FormRowInput value={newMember} type="text" placeholder="email" onChange={handleMemberChange} />
                        <div>
                            <Button id="btn-add" type="submit" version="hero" onClick={handleAdd}>
                                dodaj
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

export default Group;
