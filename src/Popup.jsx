import { useState } from "react";

function Popup() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <p>Hello Vite + React! He</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default Popup;
