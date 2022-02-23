import React, { useEffect, useState } from "react";
import "./App.css";

import { ethers } from "ethers";

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const init = async () => {
      const provider = ethers.providers.getDefaultProvider();
      const blockNumber = await provider.getBlockNumber();
      const balance = await provider.getBalance("ethers.eth");

      setInfo({
        blockNumber,
        balance,
      });
    };

    init();
  });

  return <div className="App">{JSON.stringify(info)}</div>;
}

export default App;
