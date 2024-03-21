import CreateTask from './create-task';
import TaskList from './task-list';
import Counter from './counter';

const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <Counter />
        <CreateTask />
        {/* <UserList /> */}
      </div>
      <TaskList />
    </main>
  );
};

export default Application;
