import React from 'react'

export default function ProfileInfo(props) {
    return (
         <div className="container detail_container">
                <div className="rand-avatar">
                    <img src="https://www.placecage.com/c/100/100" alt="username" class="avatar_image" />
                </div>
                <div className="user-details">
                    <div className="details_identity">
                        <span className="platform-icon">Logo</span>
                        <span className="details_name">{props.user}</span>
                    </div>
                </div>
        </div>
    )
}
