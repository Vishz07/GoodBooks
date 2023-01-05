import "./styles.css";
import { useState } from "react";

var favouritebooks = {
  friction: [
    {
      name: "The fault in our stars",
      rating: "3/5",
      desc:
        "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. "
    },
    {
      name: "The silent patient",
      rating: "4/5",
      desc:
        "psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive."
    },
    {
      name: "The diary of a winpy kid",
      rating: "3/5",
      desc:
        "The book is about a boy named Greg Heffley and his attempts to become popular in his first year of middle school."
    }
  ],

  Selfhelp: [
    {
      name: "Subtle art of not giving a fuck",
      rating: "4/5",
      desc:
        "The Subtle Art of Not Giving a F*ck argues that individuals should seek to find meaning through what they find to be important and only engage in values that they can control."
    },
    {
      name: "How to win friends and influence people",
      rating: "4/5",
      desc:
        "It teaches you the principles to better understand people, become a more likable person, improve relationships, win others over, and influence behavior through leadership."
    },
    {
      name: "Atomic Habits",
      rating: "5/5",
      desc:
        "definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time."
    }
  ],

  Business: [
    {
      name: "The 4 hour work week",
      rating: "2/5",
      desc:
        "Ferriss promises a way to get all the rewards of working without having to wait until the end of your career."
    },
    {
      name: "Steal like an artist",
      rating: "4/5",
      desc:
        "Steal Like An Artist gives you permission to copy your heroes' work and use it as a springboard to find your own, unique style, all while remembering to have fun."
    },
    {
      name: "Keep going",
      rating: "3/5",
      desc:
        "Keep Going explores the concept of creativity and teaches its readers ways to nurture the mind when we're undergoing divergent thinking."
    }
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
              <span
                style={{
                  textAlign: "left",
                  display: "flex",
                  margin: 5,
                  fontSize: "20px"
                }}
              >
                {book.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
