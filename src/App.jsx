import { Button } from "@/components/ui/button";
import { useState } from "react";
import "./App.css";
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
      </div>
    </>
  );
}

export default App;
