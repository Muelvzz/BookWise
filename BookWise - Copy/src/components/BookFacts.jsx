import React, { useEffect, useState } from "react";
import { getBookFactsFromHuggingFace } from "./ai";
import "../css/bookfacts.css";
import ReactMarkdown from 'react-markdown'

export default function BookFacts(props) {
  const books = props.bookLists;
  const [facts, setFacts] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.state && books.length > 0) {
      async function fetchFacts() {
        setIsLoading(true);
        try {
          const response = await getBookFactsFromHuggingFace(books);
          setFacts(response);
        } catch (error) {
          console.error("Error:", error);
          setFacts("Sorry, something went wrong getting the book facts.");
        } finally {
          setIsLoading(false);
        }
      }

      fetchFacts();
    }
  }, [props.state, books]);

  console.log(facts)

  return (
    <>
      {props.state && (
        <article className="bookfacts-container">
          <div>
            {isLoading && <p>Loading interesting facts about your books...</p>}
          </div>

          {facts && !isLoading && (
            <div className="facts-display">
              <div className="facts-title">
                <img src="/logo.png" alt="Logo" />
                <h1>BookWise Facts: </h1>
              </div>
              <ReactMarkdown>{facts}</ReactMarkdown>
            </div>
          )}
        </article>
      )}
    </>
  );
}
