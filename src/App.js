import "./styles.css";
import { useState } from "react";

var favouritebooks = {
  friction: [
    { name: "The fault in our stars", rating: "3/5" },
    { name: "The silent patient", rating: "4/5" },
    { name: "The diary of a winpy kid", rating: "3/5" }
  ],

  Selfhelp: [
    { name: "Subtle art of not giving a fuck", rating: "4/5" },
    { name: "How to win friends and influence people", rating: "4/5" },
    { name: "Atomic Habits", rating: "5/5" }
  ],

  Business: [
    { name: "The 4 hour work week", rating: "2/5" },
    { name: "Steal like an artist", rating: "4/5" },
    { name: "Keep going", rating: "3/5" }
  ]
};
var favbooksarr = Object.keys(favouritebooks);

export default function App() {
  var [books, setbooks] = useState("friction");

  function genrehandler(genre) {
    setbooks(genre);
  }

  return (
    <div className="App">
      <h1>
        <span>😍</span>Good<span style={{ color: "skyblue" }}>books</span>
      </h1>
      <p>Some of my most favourite books</p>

      <div>
        {favbooksarr.map((genre) => (
          <button
            style={{
              padding: "1rem",
              margin: "5px",
              backgroundColor: "skyblue",
              borderRadius: "5px"
            }}
            onClick={() => genrehandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {favouritebooks[books].map((book) => (
            <li
              style={{
                border: "2px",
                borderStyle: "solid",
                borderRadius: "5px",
                borderColor: "black",
                margin: 20,
                listStyle: "none"
              }}
              key={book.name}
            >
              {" "}
              <div
                style={{
                  fontSize: "2rem",
                  textAlign: "left",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {book.name}
                <span style={{ fontWeight: "normal" }}>{" - "}</span>
                <span style={{ fontSize: "25px", color: "skyblue" }}>
                  {book.rating}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
