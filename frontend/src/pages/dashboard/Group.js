import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, FormRowInput } from '../../components';
import Wrapper from '../../assets/wrappers/Group';
import { CiFloppyDisk } from 'react-icons/ci';
import { HiOutlineXMark, HiCheck } from '../../../node_modules/react-icons/hi2';
import { useGroupContext } from '../../context/GroupContext';
import { useUserContext } from '../../context/UserContext';

function Group() {
    const [newGroupName, setNewGroupName] = useState('Twoja grupa');
    const [emailNewMember, setEmailNewMember] = useState('');
    const { userData } = useUserContext();
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (emailNewMember === group.owner.email) {
            toast.warning('Podany e-mail należy do właściciela grupy! Podaj inny.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
            setEmailNewMember('');
            return;
        } else if (group.members.find((member) => member.email === emailNewMember)) {
            toast.warning('Osoba o podanym adresie e-mail należy już do grupy!', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
            return;
        } else if (group.invitations.find((member) => member.email === emailNewMember)) {
            toast.warning('Zaproszenie zostało już wcześniej wysłane. Poczekaj na odpowiedź.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
            return;
        }

        const result = await inviteUser(emailNewMember);
        if (!result) {
            toast.warning('Brak użytkownika o podanym adresie e-mail w bazie.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
        }
        setEmailNewMember('');
    };

    const handleGroupNameChange = (event) => {
        const name = event.target.value;
        setNewGroupName(name);
    };

    const handleMemberInvitation = (event) => {
        const email = event.target.value;
        setEmailNewMember(email);
    };

    const handleAcceptInvitation = (id) => {
        acceptInvitation(id);
        toast.info('Zaloguj się ponownie, żeby zobaczyć zmiany.', {
            position: toast.POSITION.BOTTOM_LEFT,
            className: 'toast-message'
        });
    };

    const handleRemoveUser = (email) => {
        removeUser(email);

        if (group.owner.email !== userData.email) {
            toast.info('Zaloguj się ponownie, żeby zobaczyć zmiany.', {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message'
            });
        }
    };

    return (
        <Wrapper>
            <div className="group-container">
                <div className="group-name-container">
                    <h2>Aktualna nazwa grupy</h2>
                    <div className="group-name">
                        <FormRowInput
                            id="groupNameInput"
                            value={newGroupName}
                            type="text"
                            placeholder="nowa nazwa"
                            onChange={handleGroupNameChange}
                        />
                        <CiFloppyDisk className="btn-save" onClick={handleSave} />
                    </div>
                </div>
                <div className="status-container">
                    <div className="members">
                        <h3>Członkowie grupy</h3>
                        <div className="description">
                            <h5>
                                - osoby, które aktualnie należą do Twojej grupy, jeśli chcesz kogoś dodać, wyślij
                                zaproszenie
                            </h5>
                        </div>
                        {group.members
                            ? group.members.map((item, index) => {
                                  return (
                                      <div className="member" key={item.id}>
                                          {index === 0 ? (
                                              <p>{item.email}</p>
                                          ) : (
                                              <>
                                                  <p>{item.email}</p>
                                                  <HiOutlineXMark
                                                      className="delete-btn"
                                                      onClick={() => {
                                                          handleRemoveUser(item.email);
                                                      }}
                                                  />
                                              </>
                                          )}
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                    <div className="decline-invitations">
                        <h3>Wysłane zaproszenia</h3>
                        <div className="description">
                            <h5>- osoby, do których wysłałeś/aś zaproszenie, oczekuj na odpowiedź</h5>
                        </div>
                        {group.invitations
                            ? group.invitations.map((item) => {
                                  return (
                                      <div className="member" key={item.id}>
                                          <p>{item.email}</p>
                                          <HiOutlineXMark
                                              className="delete-btn"
                                              onClick={() => declineUserInvitation(item.email)}
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                    <div className="received-invitations">
                        <h3>Otrzymane zaproszenia</h3>
                        <div className="description">
                            <h5>
                                - zaakceptuj zaproszenie i dołącz do nowej grupy opuszczając przy tym swoją lub odrzuć
                                zaproszenie
                            </h5>
                        </div>
                        {invitations
                            ? invitations.map((item) => {
                                  return (
                                      <div className="member" key={item.id}>
                                          <p>{item.owner.email}</p>
                                          <HiOutlineXMark
                                              className="delete-btn"
                                              onClick={() => declineInvitation(item.id)}
                                          />
                                          <HiCheck
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
                    <h2>Wyślij zaproszenie do grupy</h2>
                    <div className="description">
                        <h5>- jeśli chcesz wysłać komuś zaproszenie do swojej grupy, wpisz poniżej email tej osoby</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <FormRowInput
                            id="emailInput"
                            value={emailNewMember}
                            type="email"
                            placeholder="podaj email"
                            onChange={handleMemberInvitation}
                        />
                        <div>
                            <Button id="btn-add" type="submit" version="hero">
                                wyślij
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Group;
