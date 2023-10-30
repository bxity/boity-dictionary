import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
     let [keyword, setKeyword] = useState("");


     function handleResponse(response) {

     }

    function search(event) {
        event.preventDefault();
        
        let apiKey = "3a5627ae326058co2dc72a44fbta8eef";
        let apiUrl =
          `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key={apiKey}`;
          axios.get(apiUrl).then(handleResponse);
    }




     function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }

     return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
            </form>
        </div>
     );
}