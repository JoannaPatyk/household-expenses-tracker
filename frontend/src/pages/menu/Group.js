import React, { useEffect, useState } from 'react';
import { Button, FormRowInput } from '../../components/IndexComponents';
import notification, { SUCCESS, WARNING, INFO, ERROR } from '../../utils/Notification';
import Wrapper from '../../assets/wrappers/Group';
import { CiFloppyDisk } from 'react-icons/ci';
import { HiOutlineXMark, HiCheck } from 'react-icons/hi2';
import { useGroupContext } from '../../context/GroupContext';
import { useUserContext } from '../../context/UserContext';

function Group() {
    const [newGroupName, setNewGroupName] = useState('');
    const [oldGroupName, setOldGroupName] = useState('');
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
        setOldGroupName(group.name);
    }, [group.name]);

    const handleGroupNameChange = (event) => {
        const name = event.target.value;
        setNewGroupName(name);
    };

    const handleMemberInvitation = (event) => {
        const email = event.target.value;
        setEmailNewMember(email);
    };

    const handleSave = async () => {
        if (newGroupName === oldGroupName) {
            return;
        }

        const result = await updateGroupName(newGroupName);

        if (result) {
            notification(SUCCESS, 'Nazwa grupy została pomyślnie zaktualizowana', true);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (emailNewMember === '') {
            return;
        } else if (emailNewMember === group.owner.email) {
            notification(WARNING, 'Podany e-mail należy do właściciela grupy, podaj inny');
            setEmailNewMember('');
            return;
        } else if (group.members.find((member) => member.email === emailNewMember)) {
            notification(WARNING, 'Osoba o podanym adresie e-mail należy już do grupy');
            return;
        } else if (group.invitations.find((member) => member.email === emailNewMember)) {
            notification(WARNING, 'Zaproszenie zostało już wcześniej wysłane, poczekaj na odpowiedź');
            return;
        }

        const result = await inviteUser(emailNewMember);
        if (!result) {
            notification(WARNING, 'Brak użytkownika o podanym adresie e-mail w bazie');
        }
        setEmailNewMember('');
    };

    const handleAcceptInvitation = async (item) => {
        const result = await acceptInvitation(item.id);

        if (result) {
            notification(
                INFO,
                `Zaproszenie od grupy '${item.name}' zaakceptowane, zaloguj się ponownie, żeby zobaczyć zmiany`
            );
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    const handleDeclineInvitation = async (item) => {
        const result = await declineInvitation(item.id);

        if (result) {
            notification(INFO, `Zaproszenie od grupy '${item.name}' zostało odrzucone`);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    const handleRemoveUser = async (email) => {
        const result = await removeUser(email);

        if (result) {
            if (group.owner.email !== userData.email) {
                notification(INFO, 'Grupa została opuszczona');
            } else if (group.owner.email === userData.email) {
                notification(INFO, `Użytkownik ${email} został usunięty z grupy`);
            }
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
        }
    };

    const handleDeclineUserInvitation = async (email) => {
        const result = await declineUserInvitation(email);

        if (result) {
            notification(INFO, `Zaproszenie wysłane do ${email} zostało anulowane`);
        } else {
            notification(ERROR, 'Coś poszło nie tak, spróbuj ponownie');
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
                            <h5>- osoby, do których wysłałeś/aś zaproszenie, oczekuj na odpowiedź z ich strony</h5>
                        </div>
                        {group.invitations
                            ? group.invitations.map((item) => {
                                  return (
                                      <div className="member" key={item.id}>
                                          <p>{item.email}</p>
                                          <HiOutlineXMark
                                              className="delete-btn"
                                              onClick={() => handleDeclineUserInvitation(item.email)}
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
                                - zaakceptuj zaproszenie i dołącz do nowej grupy (opuścisz swoją) lub odrzuć zaproszenie
                            </h5>
                        </div>
                        {invitations
                            ? invitations.map((item) => {
                                  return (
                                      <div className="member" key={item.id}>
                                          <p>{item.owner.email}</p>
                                          <HiOutlineXMark
                                              className="delete-btn"
                                              onClick={() => handleDeclineInvitation(item)}
                                          />
                                          <HiCheck
                                              className="accept-btn"
                                              onClick={() => handleAcceptInvitation(item)}
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
                <div className="invitation-container">
                    <h2>Wyślij zaproszenie</h2>
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
