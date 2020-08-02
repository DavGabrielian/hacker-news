import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/api";

import Header from "./components/header/header";
import List from "./components/list/list";

const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds("hello")
    .then((data) => setStoryIds(data));
  }, []);

  return (
    <div>
      <Header />
      <List />
      <p>{storyIds}</p>
    </div>
  );
};

export default App;
