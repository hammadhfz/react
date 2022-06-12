import logo from "./logo.svg";
import "./App.css";
let name = "Hammad";
let a = 78;
function formatName(obj) {
  return obj.firstName + " " + obj.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h3>Hello, {formatName(user)}!</h3>;

function App() {
  return (
    <>
      <div className="container">
        <h1>UI/Ux</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          praesentium explicabo quasi illum maxime vitae corporis minima
          ducimus! Saepe, error doloribus eaque natus quae adipisci at
          consectetur debitis impedit ratione?
        </p>
        <p>
          {name}
          {a} feel the magic in the air
        </p>
        <p>{element}</p>
      </div>
    </>
  );
}

export default App;
