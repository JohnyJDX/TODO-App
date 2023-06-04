import s from './Header.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Header = ({ onAddTask }) => {
	const [task, setTask] = useState('');

	const handleChangeInput = e => {
		setTask(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (task !== '') {
			onAddTask({
				title: task,
				isCompleted: false,
				id: uuid(),
			});
			setTask('');
		}
	};

	return (
		<header className={s.header}>
			<img src="./img/logo.svg" alt="logo" />
			<form onSubmit={handleSubmit} className={s.newTodo}>
				<input
					onChange={handleChangeInput}
					value={task}
					type="text"
					placeholder="Add a new task"
				/>
				<button className={s.btnAdd}>
					Create
					<IoIosAddCircleOutline size={18} />
				</button>
			</form>
		</header>
	);
};

export default Header;
