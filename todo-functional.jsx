import React, { useState } from 'react';

const TaskList = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const insertEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div>
      <input
        placeholder="Write something"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <button onClick={insertEntry}>Add</button>
      <ul>
        {entries.map((entry, id) => (
          <li key={id}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
