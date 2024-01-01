import { Outlet, Link } from "react-router-dom";
import Login from "./components/Login/login";

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav className="main-nav">
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
