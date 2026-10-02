import Task1 from "./task1/task1";
import Task2 from "./task2/task2";
import Task3 from "./task3/task3";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Assignment</h1>

        <p>
          Components • Props • State • Events • Rendering
        </p>
      </header>

      <main>
        <Task1 />
        <Task2 />
        <Task3 />
      </main>
    </div>
  );
}

export default App;