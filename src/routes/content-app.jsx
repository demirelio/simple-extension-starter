// This is the root component for the content script
// Check content-entry for direct DOM manipulation
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tailwind.css";

export default function ContentApp() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="nc-fixed nc-bg-slate-200 nc-top-0 nc-z-1000"
      id="nocean_app"
    >
      <header>
        <p className="nc-text-red-500">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <Link to="todos" className="nc-text-green-500 nc-text-xl">
            Click for todos
          </Link>
        </p>
        <a href="#" className="nc-text-purple-500 nc-font-bold">
          TEST
        </a>
      </header>
    </div>
  );
}
