// import { Button } from "@/components/ui/button";
// import { useState } from "react";
import "./App.css";
import { CardWithForm } from "./card/card";
import { DifferenceCard } from "./card/difference";
import { StatCard } from "./card/revCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div> */}
        <CardWithForm />
      </div>
      <StatCard />
      <DifferenceCard />
    </>
  );
}

export default App;
