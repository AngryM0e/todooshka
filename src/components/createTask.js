import { useRef, useState } from 'react';

function CreateTask(props) {

	const { addTask } = props;
	let [taskName, setName] = useState('');

	const addAndClear = (e) => {
		addTask(taskName)(e);
		setName('');

		e.preventDefault();
	}

	const onChange = (e) => {
		setName(e.target.value);

		e.preventDefault();
	}

	return (
		<div className='createTask'>
			<input value={taskName} type="text" placeholder='Введите название задачи'
				onChange={onChange}
			/>
			<button type='button'
				onClick={addAndClear}
			>
				Добавить
			</button>
		</div>
	)
}

export default CreateTask;