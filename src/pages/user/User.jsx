import React from 'react';
import './user.css';
import { LocationSearching, PermIdentity, CalendarToday, PhoneAndroid, MailOutline } from '@material-ui/icons';

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
              alt=""
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck54</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">12.12.2012</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+3 234 543 23</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck54@mail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                
            </form>
        </div>
      </div>
    </div>
  );
}

export default User;
