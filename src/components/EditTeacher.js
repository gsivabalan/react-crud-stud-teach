import React, { useState, useEffect } from 'react';

const EditTeacher = ({ teacher, onUpdate, onCancel }) => {
  const [name, setName] = useState(teacher.name);
  const [email, setEmail] = useState(teacher.email);
  const [phone, setPhone] = useState(teacher.phone);
  const [qualification, setQualification] = useState(teacher.qualification);

  useEffect(() => {
    setName(teacher.name);
    setEmail(teacher.email);
    setPhone(teacher.phone);
    setQualification(teacher.qualification);
  }, [teacher]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: teacher.id, name, email, phone, qualification });
  };

  return (
    <div>
      <h2>Edit Teacher</h2>
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
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTeacher;

