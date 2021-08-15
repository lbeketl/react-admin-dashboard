import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            className="topAvatar"
            src="https://image.api.playstation.com/vulcan/img/cfn/11307Ol4SQrlwZRPWJYoCBNAEtHJKiOioGmIJ61RI9jB91cgTvB6MglpwUffr90KWQTEmF19HaBpsjms8u1TIJ0et5w6C7_k.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
