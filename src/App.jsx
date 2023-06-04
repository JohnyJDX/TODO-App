import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([]);

	const loadSavedTodo = () => {
		const saved = localStorage.getItem('TODO');
		if (saved) {
			setTasks(JSON.parse(saved));
		}
	};

	useEffect(() => {
		loadSavedTodo();
	}, []);

	const saveTaskAndSave = newTask => {
		setTasks(newTask);
		localStorage.setItem('TODO', JSON.stringify(newTask));
	};

	const handleAddTask = newTask => {
		saveTaskAndSave([...tasks, newTask]);
	};

	const handleToggleTaskIsCompleted = id => {
		saveTaskAndSave(
			tasks.map(task => {
				if (task.id === id) {
					return {
						...task,
						isCompleted: !task.isCompleted,
					};
				}
				return task;
			})
		);
	};

	const handleDeleteTask = id => {
		saveTaskAndSave(tasks.filter(task => task.id !== id));
	};

	return (
		<>
			<Header onAddTask={handleAddTask} />
			<Tasks
				onToggleTaskIsCompleted={handleToggleTaskIsCompleted}
				tasks={tasks}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
};

export default App;
