import React from "react";

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">
                        {props.greenBtnText || "Approve"}
                    </div>
                    <div className="ui basic red button">
                        {props.redBtnText || "Reject"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
