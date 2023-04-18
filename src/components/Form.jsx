import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email here"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password here"
      />
      <button type="submit" onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </div>
  );
}

export default Form;
