import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="flex flex-col  w-screen">
      <div className="bg-slate-200 h-2/3 w-full">
        <Navbar />
        <Cart />
      </div>
      <div className="h-1/3 w-full">
        <h1>part2</h1>
      </div>
    </div>
  );
}

export default App;
