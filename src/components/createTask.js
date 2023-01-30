import { useRef, useState } from 'react';

function CreateTask(props) {

	const { addTask } = props;
	let [taskName, setName] = useState('');
	const inputRef = useRef(null);
	const addAndClear = (addTask) => (e) => {
		addTask();
		inputRef.current.value = '';
		setName(taskName = '');
	}


	return (
		<div className='createTask'>
			<input ref={inputRef} type="text" placeholder='Введите название задачи'
				onChange={(e) => { setName(taskName = e.target.value) }}
			/>
			<button type='button'
				onClick={addAndClear(addTask(taskName))}
			>
				Добавить
			</button>
		</div>
	)
}

export default CreateTask;