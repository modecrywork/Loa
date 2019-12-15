import React from "react";
import { withContext } from "with-context";

const AppContext = React.createContext({});

const AppProvider = AppContext.Provider;
const WithAppContext = withContext(AppContext);

export { WithAppContext, AppProvider };
