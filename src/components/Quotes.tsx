import quotes from "../quotes";
import { Quote } from "../types/types";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

const Quotes = () => {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote.text);
    const notify = () =>
      toast.success(`Copied to clipboard!`, {
        theme: "light",
        transition: Slide,
        position: "top-center",
      });
    return notify();
  };
  return (
    <>
      <section key={quote.id}>
        <div className="index">
          <p>ADVICE #{quote.id}</p>
        </div>
        <div className="quote">{quote.text}</div>
        <div className="break"></div>
        <div className="pauze">
          <i className="icon-media-pause" onClick={copyToClipboard}></i>
        </div>
        <div className="button">
          <i
            className="icon-dice"
            onClick={() => setQuote(getRandomQuote())}
          ></i>
        </div>
      </section>
    </>
  );
};

export default Quotes;

// event als je een text wil copieren naar je clipboard
// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
// TEST COPY -----> Happiness depends upon ourselves.
// TEST COPY ---> Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.
