import Navbar from "./component/Navbar";
import Navbardown from "./component/Navbardown";
import Cart from "./component/Cart";
import { useState } from "react";
function App() {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="flex flex-col  w-screen">
      <div className="bg-slate-200 h-2/3 w-full">
        <Navbar setDrawer={setDrawer} />
        <Cart drawer={drawer} />
      </div>
      <div className="h-1/3 w-full">
        <Navbardown />
      </div>
    </div>
  );
}

export default App;
