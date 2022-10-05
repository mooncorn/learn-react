import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <div className="video-list ">
      <div className="ui relaxed divided list">{renderedVideos}</div>
    </div>
  );
};

export default VideoList;
