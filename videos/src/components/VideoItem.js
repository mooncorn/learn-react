import React from "react";

class VideoItem extends React.Component {
    render() {
        return (
            <div key={this.props.key} className="item">
                <div className="image">
                    <img src={this.props.thumbnail} />
                </div>
                <div className="content">
                    <a className="header" href="/" alt="video-thumbnail">
                        {this.props.title}
                    </a>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
