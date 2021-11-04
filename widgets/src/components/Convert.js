import React, { useState, useEffect } from "react";
import translate from "../api/translate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  // wait until user stops typing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  // when user stops typing, fetch the translation
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await translate.post(
        "",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    // call async function to fetch the translated text
    if (debouncedText) {
      doTranslation();
    }
  }, [debouncedText, language]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Output</label>
        <input value={translated} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Convert;
