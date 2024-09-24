import { Button } from "@/components/ui/button";
import { useState } from "react";
import "./App.css";
import { CardWithForm } from "./card/card";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
        <CardWithForm/>

      </div>
    </>
  );
}

export default App;
