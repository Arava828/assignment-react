import React, { useState } from 'react';

const UserForm = () => {
  const [input, setInput] = useState({ username: '', useremail: '' });
  const [validation, setValidation] = useState({});

  const checkForm = () => {
    const temp = {};
    if (!input.username) temp.username = 'Name cannot be blank';
    if (!input.useremail.includes('@')) temp.useremail = 'Invalid email';
    return temp;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = checkForm();
    setValidation(errors);
    if (!Object.keys(errors).length) {
      alert('Submitted successfully!');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={input.username}
          onChange={(e) =>
            setInput({ ...input, username: e.target.value })
          }
        />
        {validation.username && <p style={{ color: 'crimson' }}>{validation.username}</p>}
      </div>

      <div>
        <label>Email ID:</label>
        <input
          type="email"
          value={input.useremail}
          onChange={(e) =>
            setInput({ ...input, useremail: e.target.value })
          }
        />
        {validation.useremail && <p style={{ color: 'crimson' }}>{validation.useremail}</p>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default UserForm;

