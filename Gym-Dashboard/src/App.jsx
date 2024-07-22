import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "./pages/errorboundary/errorboundary.component";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/themeprovider/themeprovider";
import "./utilities/firebase/firebase"

function App() {
  
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />
<ErrorBoundary>
<Outlet />
</ErrorBoundary>
       
      </ThemeContextProvider>
    </>
  );
}

export default App;
