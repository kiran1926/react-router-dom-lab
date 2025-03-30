import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import { Routes, Route } from 'react-router';
import './App.css';


// src/App.jsx

// initial state
const initialState = [
  { _id: 1,
    boxSize: "Small",
    boxOwner: "Alex",
  },
];

const App = () => {

  const[ mailboxes, setMailboxes ] = useState (initialState);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }
  return (
    <>
      <NavBar />
      <h1>Welcome to Post Office</h1>
      <Routes>
        <Route path="/" element={<h2>Check all of your Mailboxes</h2>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/mailboxes/new" element={<MailboxForm addMailbox={addMailbox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
        <Route path="*" element={<h2>Msilbox Not Found!</h2>}/>
      </Routes>
    </>
  );
};

export default App;

