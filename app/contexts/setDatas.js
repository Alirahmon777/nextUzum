"use client";

import { createContext, useState } from "react";

export const SetDataContext = createContext();

const SetDataContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);

  return (
    <SetDataContext.Provider
      value={{
        datas,
        setDatas,
      }}
    >
      {children}
    </SetDataContext.Provider>
  );
};

export default SetDataContextProvider;
