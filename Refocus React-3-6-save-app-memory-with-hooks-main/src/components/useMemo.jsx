import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  // create firstName and lastName using useState and set default value to an empty string
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // define fullName using useMemo
  const fullName = useMemo(() => {
    console.log('calculating fullName...');
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]); // re-calculate fullName only if firstName or lastName changes

  return (
    // Create 2 inputs here for the firstName and lastName
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <h1>Full Name: {fullName}</h1>
    </div>
  );
}

export default UseMemo;
