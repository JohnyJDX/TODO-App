import { BiTrash } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import s from './Task.module.css';

const Task = ({
	title,
	isCompleted,
	id,
	onDeleteTask,
	onToggleTaskIsCompleted,
}) => {
	return (
		<div className={s.task}>
			<button
				onClick={() => onToggleTaskIsCompleted(id)}
				className={s.btnCheck}
			>
				{isCompleted ? (
					<BsFillCheckCircleFill className={s.btnCompleted} />
				) : (
					<div />
				)}
			</button>

			<p className={isCompleted ? s.textCompleted : ''}>{title}</p>
			<button onClick={() => onDeleteTask(id)} className={s.btnDelete}>
				<BiTrash size={20} color="#808080" />
			</button>
		</div>
	);
};

export default Task;
