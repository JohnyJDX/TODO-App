import React from 'react';
import Task from '../Task/Task';
import s from './Tasks.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Tasks = ({ tasks, onDeleteTask, onToggleTaskIsCompleted }) => {
	const amountTasks = tasks.length;
	const amountCompletedTasks = tasks.filter(
		task => task.isCompleted === true
	).length;

	return (
		<section className={s.tasks}>
			<header className={s.header}>
				<div>
					<h2>Created tasks</h2>
					<span>{amountTasks}</span>
				</div>
				<div>
					<h2 className={s.textPurple}>Completed</h2>
					<span>
						{amountTasks && `${amountCompletedTasks} of ${amountTasks}`}
					</span>
				</div>
			</header>

			<div className={s.list}>
				{amountTasks === 0 ? (
					<TransitionGroup>
						<CSSTransition
							key={amountTasks}
							timeout={600}
							classNames={{
								enter: s.taskItemEnter,
								enterActive: s.taskItemEnterActive,
								exit: s.taskItemExit,
								exitActive: s.taskItemExitActive,
							}}
						>
							<div className={s.empty}>
								<img src="./img/empty.svg" alt="empty" />
								<p>You have no tasks registered yet</p>
								<p>Create tasks and organize your to-do items.</p>
							</div>
						</CSSTransition>
					</TransitionGroup>
				) : (
					<TransitionGroup>
						{tasks.map(({ id, title, isCompleted }) => (
							<CSSTransition
								key={id}
								timeout={400}
								classNames={{
									enter: s.taskItemEnter,
									enterActive: s.taskItemEnterActive,
									exit: s.taskItemExit,
									exitActive: s.taskItemExitActive,
								}}
							>
								<Task
									key={id}
									id={id}
									title={title}
									isCompleted={isCompleted}
									onDeleteTask={onDeleteTask}
									onToggleTaskIsCompleted={onToggleTaskIsCompleted}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				)}
			</div>
		</section>
	);
};

export default Tasks;
