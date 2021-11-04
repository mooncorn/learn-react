import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <div className="image">
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt="video-thumbnail"
                />
            </div>
            <div className="content">
                <div className="header" href="/">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
