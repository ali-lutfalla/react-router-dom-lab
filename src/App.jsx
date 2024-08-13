// src/App.jsx
// src/main.jsx
// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import MailboxList from './components/MailboxList';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  }
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h1>Post Office</h1>}/>
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>} />
    </Routes>
    </>
  );
};

export default App;
