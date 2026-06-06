import { BrowserRouter,Routes,Route} from  "react-router-dom";
import { ToolsRoute } from "./pages/Tools/Tools";
import { AppLayout } from "./components/layout/AppLayout"

import { About } from "./pages/About/about";



function App() {
   return(
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/tools" element={<ToolsRoute />} />
            <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
   );
}

export default App
