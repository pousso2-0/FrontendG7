import React from 'react';

const ProfileTabs = () => {
  return (
    <div className="user-tabing">
      <ul className="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
        <li className="nav-item col-12 col-sm-3 p-0">
          <a className="nav-link active" href="#pills-timeline-tab" data-bs-toggle="pill" data-bs-target="#timeline" role="button">Timeline</a>
        </li>
        <li className="nav-item col-12 col-sm-3 p-0">
          <a className="nav-link" href="#pills-about-tab" data-bs-toggle="pill" data-bs-target="#about" role="button">About</a>
        </li>
        <li className="nav-item col-12 col-sm-3 p-0">
          <a className="nav-link" href="#pills-friends-tab" data-bs-toggle="pill" data-bs-target="#friends" role="button">Friends</a>
        </li>
        <li className="nav-item col-12 col-sm-3 p-0">
          <a className="nav-link" href="#pills-photos-tab" data-bs-toggle="pill" data-bs-target="#photos" role="button">Photos</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileTabs;
