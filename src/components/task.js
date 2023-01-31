import { TfiMarkerAlt, TfiClose } from 'react-icons/tfi'
import { useRef, useState, useEffect } from 'react';

function Task(props) {

	const { deleteTask, editTask } = props;
	const [task, setstate] = useState(props.task);
	const inputRef = useRef(null);
	let [inputValue, setValue] = useState(task.taskName)

	useEffect(() => {
		inputRef.current.focus();
	}, [task]);

	const toogleInput = () => {
		const neWtask = Object.assign({}, task);
		neWtask.isDisable = !neWtask.isDisable;
		setstate(neWtask);
	}

	const onEdit = (e) => {
		editTask(e.target.value, task.id);
		setValue(e.target.value);
	}

	return (
		<div className="task">
			<input ref={inputRef} type="text"
				defaultValue={inputValue}
				disabled={task.isDisable}
				onChange={onEdit}
			/>
			<div className="buttons">
				<TfiMarkerAlt className='edit-button' onClick={toogleInput} />
				<TfiClose className='delete-button' onClick={deleteTask(task.id)} />
			</div>
		</div>
	)
}

export default Task;