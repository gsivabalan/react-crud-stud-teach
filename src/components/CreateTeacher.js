import React, { useState } from 'react';

const CreateTeacher = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, email, phone, qualification });
    setName('');
    setEmail('');
    setPhone('');
    setQualification('');
  };

  return (
    <div>
      <h2>Create Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Qualification:
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTeacher;
