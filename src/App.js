import { useEffect, useState } from "react";
import Display from "./Display";
import Menu from "./Menu";
import "./styles.css";
import Typography from "@mui/material/Typography";

export default function App() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("stop");

  useEffect(() => {
    const timer = setInterval(() => {
      switch (action) {
        case "direct":
          setCount(count + 1);
          break;
        case "reverse":
          if (count > 0) {
            setCount(count - 1);
          }
          break;
        case "reset":
          setCount(0);
          break;
        case "stop":
        default:
          break;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count, action]);

  return (
    <div className="App">
      <Typography variant="h2">
        Timer
      </Typography>;
      <Display count={count} />
      <Menu
        setDirect={() => setAction("direct")}
        setReverse={() => setAction("reverse")}
        stop={() => setAction("stop")}
        reset={() => setAction("reset")}
        setInitialCount={(count) => setCount(count)}
      />
    </div>
  );
}
