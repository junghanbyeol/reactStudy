
import Button from "./Button";
import sytles from "./App.module.css"

import { useState, useEffect } from "react";

function Hello() {
  
  useEffect(() => {
    console.log('hi')
    return () => console.log('bye')
  }, [])
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : 'Show'}</button>
    </div>
  );
}

export default App;


