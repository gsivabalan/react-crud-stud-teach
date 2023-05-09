import React from 'react';
import Teacher from './Teacher';

const TeacherList = ({ teachers, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Teacher List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <Teacher
              key={teacher.id}
              teacher={teacher}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
