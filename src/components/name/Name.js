import "./Name.css";

function Name({ name, stack }) {
  return (
    <div className="name">
      <h1>Hello {name}</h1>
      <h2>My tech stack is {stack}</h2>
    </div>
  );
}

export default Name;
