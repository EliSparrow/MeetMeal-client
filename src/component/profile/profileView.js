// import React from 'react';
// import {BrowserRouter as Route} from 'react-router-dom';
// import {useState} from 'react';
// import axios from 'axios';
//
// const useProfileInfoUser = (setProfileInfos) => {
//     const header = {
//       'x-auth-token': sessionStorage.getItem('token')
//     };
//
//     axios.get('http://localhost:1509/users/my-profile', {
//       header: header}
//     ).then(res => {
//       setProfileInfos(res.data)
//     }).catch(err => {
//       alert('Nous sommes désolés, nous faisons face à un problème de serveur')
//       return (
//         <Route exact path='/'></Route>
//       )
//     })
// }
//
//
// const ProfileInfoUser = () => {
//   let [profileInfos, setProfileInfos] = useState({});
//   if (profileInfos.length === 0)
//     useProfileInfoUser(setProfileInfos);
//
//   return (
//     <div className= 'container'>
//         { profileInfos.map((profileInfo) =>
//             <div className='profile row'>
//               <div className='col-12 col-sm-4' id='avatar-user'>
//                   <p>Je suis la photo</p>
//               </div>
//               <div className='col-12 col-sm-4' id='avatar-user'>
//                 <p>Je suis les infos du user</p>
//               </div>
//               <div className='bio row'>
//                 <div className='col-12 col-sm-4' id='avatar-user'>
//                   <p> Je suis la bio </p>
//                 </div>
//               </div>
//             </div>
//           )
//         }
//       </div>
//   )
//
// }
//
// export default ProfileInfoUser;
