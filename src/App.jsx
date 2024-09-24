import { Button } from "@/components/ui/button";
import { useState } from "react";
import "./App.css";
import { CardWithForm } from "./card/card";
import { Input } from "@/components/ui/input"

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
        Ethereum
       <Input/>
       Tron 
       <Input/>
      </div>
    </>
  );
}

export default App;
