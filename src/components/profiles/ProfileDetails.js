import React from "react";

const ProfileDetails = (props) => {
    console.log(props);
    return (
        <div className="container section profile-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Profile: </span>
                    <p>Llxbhsjcv cwhjccnvajchvqdcq dhjqvcqjhcvqjhcvq cqhjcvqc qcjhq cqjhc qcqjhcvqjch qjhvcjhc a vhshagvcahgnc vaschwvwujefcvs hmcwngev chg nsvcywhfcvyuwdq</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Username</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;