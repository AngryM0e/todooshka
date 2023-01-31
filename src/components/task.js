import { TfiMarkerAlt, TfiClose } from 'react-icons/tfi'
import { useRef, useState, useEffect } from 'react';

function Task(props) {

	const { deleteTask } = props;
	const [task, setstate] = useState(props.task);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, [task]);

	const onClick = (task) => (e) => {
		const neWtask = Object.assign({}, task);
		neWtask.isDisable = !neWtask.isDisable;
		neWtask.taskName = inputRef.current.value;
		setstate(neWtask);

	}
	return (
		<div className="task">
			<input ref={inputRef} type="text"
				defaultValue={task.taskName}
				disabled={task.isDisable}
			/>
			<div className="buttons">
				<TfiMarkerAlt className='edit-button' onClick={onClick(task)} />
				<TfiClose className='delete-button' onClick={deleteTask(task.id)} />
			</div>
		</div>
	)
}

export default Task;