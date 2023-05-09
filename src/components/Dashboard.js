import React, { useState } from 'react';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import TeacherList from './TeacherList';
import CreateTeacher from './CreateTeacher';
import EditTeacher from './EditTeacher';

const Dashboard = () => {
  const [students, setStudents] = useState([
    // Initial student data
  ]);

  const [teachers, setTeachers] = useState([
    // Initial teacher data
  ]);

  const [editingStudent, setEditingStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [editingTeacher, setEditingTeacher] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Student CRUD operations
  const handleCreateStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleEditStudent = (student) => {
    setStudents(students.map((s) => (s.id === student.id ? student : s)));
    setSelectedStudent(null);
    setEditingStudent(false);
  };

  const handleDeleteStudent = (student) => {
    setStudents(students.filter((s) => s.id !== student.id));
  };

  const handleEditStudentClick = (student) => {
    setSelectedStudent(student);
    setEditingStudent(true);
  };

  const handleCancelStudent = () => {
    setSelectedStudent(null);
    setEditingStudent(false);
  };

  // Teacher CRUD operations
  const handleCreateTeacher = (teacher) => {
    setTeachers([...teachers, teacher]);
  };

  const handleEditTeacher = (teacher) => {
    setTeachers(teachers.map((t) => (t.id === teacher.id ? teacher : t)));
    setSelectedTeacher(null);
    setEditingTeacher(false);
  };

  const handleDeleteTeacher = (teacher) => {
    setTeachers(teachers.filter((t) => t.id !== teacher.id));
  };

  const handleEditTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setEditingTeacher(true);
  };

  const handleCancelTeacher = () => {
    setSelectedTeacher(null);
    setEditingTeacher(false);
  };

  return (
    <div>
      <h1>Student and Teacher Management System</h1>

      {/* Student Section */}
      <h2>Students</h2>
      {editingStudent ? (
        <EditStudent
          student={selectedStudent}
          onUpdate={handleEditStudent}
          onCancel={handleCancelStudent}
        />
      ) : (
        <>
          <CreateStudent onCreate={handleCreateStudent} />
          <StudentList
            students={students}
            onEdit={handleEditStudentClick}
            onDelete={handleDeleteStudent}
          />
        </>
      )}

      {/* Teacher Section */}
      <h2>Teachers</h2>
      {editingTeacher ? (
        <EditTeacher
          teacher={selectedTeacher}
          onUpdate={handleEditTeacher}
          onCancel={handleCancelTeacher}
        />
      ) : (
        <>
          <CreateTeacher onCreate={handleCreateTeacher} />
          <TeacherList
            teachers={teachers}
            onEdit={handleEditTeacherClick}
            onDelete={handleDeleteTeacher}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
