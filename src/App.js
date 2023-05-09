//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import CreateTeacher from './components/CreateTeacher';
import EditTeacher from './components/EditTeacher';

function App() {
  const [page, setPage] = useState('dashboard');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const navigateToCreateStudent = () => {
    setPage('createStudent');
  };

  const navigateToEditStudent = (student) => {
    setSelectedStudent(student);
    setPage('editStudent');
  };

  const navigateToCreateTeacher = () => {
    setPage('createTeacher');
  };

  const navigateToEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setPage('editTeacher');
  };

  const handleCancel = () => {
    setSelectedStudent(null);
    setSelectedTeacher(null);
    setPage('dashboard');
  };

  let content;
  switch (page) {
    case 'dashboard':
      content = (
        <Dashboard
          navigateToCreateStudent={navigateToCreateStudent}
          navigateToEditStudent={navigateToEditStudent}
          navigateToCreateTeacher={navigateToCreateTeacher}
          navigateToEditTeacher={navigateToEditTeacher}
        />
      );
      break;
    case 'createStudent':
      content = <CreateStudent onCancel={handleCancel} />;
      break;
    case 'editStudent':
      content = (
        <EditStudent student={selectedStudent} onCancel={handleCancel} />
      );
      break;
    case 'createTeacher':
      content = <CreateTeacher onCancel={handleCancel} />;
      break;
    case 'editTeacher':
      content = (
        <EditTeacher teacher={selectedTeacher} onCancel={handleCancel} />
      );
      break;
    default:
      content = <Dashboard />;
  }

  return <div className="App">{content}</div>;
}

export default App;