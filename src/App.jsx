import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contacts Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
