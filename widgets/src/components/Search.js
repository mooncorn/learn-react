import React, { useState, useEffect } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 500);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [term])

  useEffect(()=> {
    const search = async () => {
      const response = await wikipedia.get("", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(response.data.query.search);
    };

    if (debouncedTerm) {
      search()
    }
  }, [debouncedTerm])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="extra">
          <a
            className="ui right floated button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
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
