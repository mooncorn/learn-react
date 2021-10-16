import React from "react";

const Spinner = (props) => {
    return (
        <div class="ui active text centered inline loader">{props.message}</div>
    );
};

Spinner.defaultProps = {
    message: "Loading...",
};

export default Spinner;
