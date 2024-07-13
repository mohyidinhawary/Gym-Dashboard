import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/themeprovider/themeprovider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />

        <Outlet />
      </ThemeContextProvider>
    </>
  );
}

export default App;
