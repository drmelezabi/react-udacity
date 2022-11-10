import PopTypes from "prop-types";

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`,
            }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button
            className="contact-remove"
            onClick={() => {
              onDeleteContact(contact);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
};

ListContacts.PopTypes = {
  contacts: PopTypes.array.isRequired,
  onDeleteContact: PopTypes.func.isRequired,
};

export default ListContacts;
