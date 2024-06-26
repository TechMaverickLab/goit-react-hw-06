import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts, deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};


  export default ContactList;

