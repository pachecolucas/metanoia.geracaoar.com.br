import BasicLayout from "layout/default";
import Metanoia from "components/metanoia";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleKeypress = (event: KeyboardEvent) => {
    const { key } = event;
    switch (key) {
      case "ArrowRight":
        setIndex(index + 1);
        break;
      case "ArrowLeft":
        setIndex(index - 1);
        break;
      // case "ArrowDown":
      //   console.log("V");
      //   break;
      // case "ArrowUp":
      //   console.log("A");
      //   break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [index]);

  return (
    <BasicLayout>
      <Metanoia index={index} />
    </BasicLayout>
  );
};

export default Home;
