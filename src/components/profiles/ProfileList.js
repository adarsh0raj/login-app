import React from "react";
import ProfileSummary from "./ProfileSummary";

const ProfileList = () => {
    return (
        <div className="profile-list section">
            <ProfileSummary />
            <ProfileSummary />
            <ProfileSummary />
            <ProfileSummary />
        </div>
    );
};

export default ProfileList;