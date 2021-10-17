import React, { useState, useEffect } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await wikipedia.get("", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(response.data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    // Cleanup, clear the timer
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="extra">
          <a
            className="ui right floated button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="ui divided list">{renderedResults}</div>
    </div>
  );
};

export default Search;
