import BasicLayout from "layout/default";
import Metanoia from "components/metanoia";
import { useState } from "react";
import Controls from "components/controls";

const Home = () => {
  const [index, setIndex] = useState(0);

  const actions = {
    next: () => {
      setIndex(index + 1);
    },
    prev: () => {
      setIndex(index - 1);
    },
  };

  return (
    <BasicLayout>
      <Controls actions={actions} />
      <Metanoia index={index} />
    </BasicLayout>
  );
};

export default Home;
