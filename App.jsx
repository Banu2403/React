import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <Link to="/posts">Go to Posts</Link>
      <Link to="/users">Go to Users</Link>
    </>
  );
}

export default App;
