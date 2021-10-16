import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {
        const videos = this.props.videos.map(({ id, snippet }) => (
            <VideoItem
                key={id.videoID}
                title={snippet.title}
                description={snippet.description}
                thumbnail={snippet.thumbnails.default.url}
            />
        ));
        return <div className="ui items">{videos}</div>;
    }
}

export default VideoList;
