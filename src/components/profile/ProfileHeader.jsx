import React from 'react';

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <div className="position-relative">
        <img src="../assets/images/page-img/profile-bg1.jpg" alt="profile-bg" className="rounded img-fluid" />
        <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
          <li><a href="#"><i className="ri-pencil-line"></i></a></li>
          <li><a href="#"><i className="ri-settings-4-line"></i></a></li>
        </ul>
      </div>
      <div className="user-detail text-center mb-3">
        <div className="profile-img">
          <img src={user.profilePicture} alt="profile-img" className="avatar-130 img-fluid" />
        </div>
        <div className="profile-detail">
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>{user.location && `Location: ${user.location}`}</p>
          <p>{user.email && `Email: ${user.email}`}</p>
          <p>{user.phone && `Phone: ${user.phone}`}</p>
          <p>{user.subscriptionType && `Subscription: ${user.subscriptionType}`}</p>
        </div>
      </div>
      <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
        <div className="social-info">
          <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
            <li className="text-center ps-3">
              <h6>Posts</h6>
              <p className="mb-0">{user.postsCount}</p>
            </li>
            <li className="text-center ps-3">
              <h6>Followers</h6>
              <p className="mb-0">{user.followersCount}</p>
            </li>
            <li className="text-center ps-3">
              <h6>Following</h6>
              <p className="mb-0">{user.followingCount}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
