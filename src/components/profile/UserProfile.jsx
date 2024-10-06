import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';

const UserProfile = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body profile-page p-0">
              <ProfileHeader user={user} />
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0">
              <ProfileTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
