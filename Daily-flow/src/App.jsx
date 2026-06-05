import { BrowserRouter,Routes,Route} from  "react-router-dom";
import { ToolsRoute } from "./pages/Tools";
import { AppLayout } from "./components/layout/AppLayout"




function App() {
   return(
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/tools" element={<ToolsRoute />} />
      </Routes>
      </BrowserRouter>
   );
}

export default App
