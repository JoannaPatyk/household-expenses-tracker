import React, { useEffect, useState } from 'react';
import Wrapper from '../../assets/wrappers/Group';
import Button from '../../components/Button';
import { CiCircleRemove, CiCircleCheck, CiFloppyDisk } from 'react-icons/ci';
import FormRowInput from '../../components/FormRowInput';
import { useGroupContext } from '../../context/GroupContext';

function Group() {
    const [newGroupName, setNewGroupName] = useState('Twoja grupa');
    const [newMember, setNewMember] = useState('');
    const {
        group,
        invitations,
        updateGroupName,
        inviteUser,
        declineUserInvitation,
        removeUser,
        acceptInvitation,
        declineInvitation
    } = useGroupContext();

    useEffect(() => {
        setNewGroupName(group.name);
    }, [group.name]);

    const handleSave = () => {
        updateGroupName(newGroupName);
    };

    const handleAdd = () => {
        if (newMember === group.owner.email) {
            alert('E-mail należy do właściciela grupy! Podaj inny.');
            setNewMember('');
            return;
        }

        inviteUser(newMember);
        setNewMember('');
    };

    const handleNameChange = (event) => {
        const name = event.target.value;
        setNewGroupName(name);
    };

    const handleMemberChange = (event) => {
        const email = event.target.value;
        setNewMember(email);
    };

    const handleAcceptInvitation = (id) => {
        acceptInvitation(id);
        alert('Zaloguj się ponownie, żeby zobaczyć aktualną listę członków Twojej grupy.');
    };

    return (
        <Wrapper>
            <div className="group-container">
                <div className="group-name-container">
                    <h2>Aktualna nazwa grupy:</h2>
                    <div className="group-name">
                        <FormRowInput
                            id="groupNameInput"
                            value={newGroupName}
                            type="text"
                            placeholder="nowa nazwa"
                            onChange={handleNameChange}
                        />
                        <CiFloppyDisk className="save-btn" onClick={handleSave} />
                    </div>
                </div>
                <div className="status-container">
                    <div className="members">
                        <h3>Członkowie grupy:</h3>
                        {group.members
                            ? group.members.map((item, index) => {
                                  return (
                                      <div className="member" key={index}>
                                          {index === 0 ? (
                                              <p>{item.email}</p>
                                          ) : (
                                              <>
                                                  <p>{item.email}</p>
                                                  <CiCircleRemove
                                                      className="delete-btn"
                                                      onClick={() => removeUser(item.email)}
                                                  />
                                              </>
                                          )}
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                    <div className="decline-invitations">
                        <h3>Wysłane zaproszenia:</h3>
                        {group.invitations
                            ? group.invitations.map((item, index) => {
                                  return (
                                      <div className="member" key={index}>
                                          <p>{item.email}</p>
                                          <CiCircleRemove
                                              className="delete-btn"
                                              onClick={() => declineUserInvitation(item.email)}
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                    <div className="received-invitations">
                        <h3>Otrzymane zaproszenia:</h3>
                        {invitations
                            ? invitations.map((item, index) => {
                                  return (
                                      <div className="member" key={index}>
                                          <p>{item.owner.email}</p>
                                          <CiCircleRemove
                                              className="delete-btn"
                                              onClick={() => declineInvitation(item.id)}
                                          />
                                          <CiCircleCheck
                                              className="accept-btn"
                                              onClick={() => handleAcceptInvitation(item.id)}
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
                <div className="invitation-container">
                    <h2>Dodaj nowego członka grupy:</h2>
                    <FormRowInput
                        id="emailInput"
                        value={newMember}
                        type="text"
                        placeholder="Podaj email . . ."
                        onChange={handleMemberChange}
                    />
                    <div>
                        <Button id="btn-add" type="submit" version="hero" onClick={handleAdd}>
                            wyślij
                        </Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Group;
