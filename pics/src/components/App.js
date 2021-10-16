import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] };

    onSearchBarSubmit = async (term) => {
        try {
            const response = await unsplash.get("/search/photos", {
                params: { query: term },
            });

            this.setState({ images: response.data.results });
            console.log(this.state.images);
        } catch (err) {
            console.log(err.message);
        }
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <h1>Pics App</h1>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
