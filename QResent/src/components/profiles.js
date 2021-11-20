import React from 'react'
import StudentProfile from './studentProfile';
import TeacherProfile from './teacherProfile';
import AdminProfile from './adminstratorProfile';
class Profiles extends React.Component {
    render() { 
        let data = localStorage.getItem("USER");
        const user = JSON.parse(data);
        return <div>
            {user.userType == "1" && <TeacherProfile/>}
            {user.userType == "2" && <StudentProfile/>}
            {user.userType == "0" && <AdminProfile/>}
        </div>
    }
}
 
export default Profiles;