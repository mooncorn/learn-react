import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { videos: [], searching: false };

    onSearchBarSubmit = async (term) => {
        try {
            this.setState({ searching: true });

            const results = await youtube.get("/search", {
                params: {
                    part: "snippet",
                    q: term,
                },
            });

            this.setState({ videos: results.data.items, searching: false });
            console.log(this.state.videos);
        } catch (err) {
            console.log(err.message);
        }
    };

    loadVideos = () => {
        if (this.state.searching) return <Spinner />;

        return <VideoList videos={this.state.videos} />;
    };

    render() {
        return (
            <div className="ui container">
                <h1>Videos</h1>
                <SearchBar onSubmit={this.onSearchBarSubmit} />

                {this.loadVideos()}
            </div>
        );
    }
}

export default App;
