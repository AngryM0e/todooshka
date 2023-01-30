import Task from './task'

function Tasklist(props) {

	const { tasks, deleteTask } = props;

	return (
		<div className='tasklist'>
			{
				tasks.length > 0 ?

					tasks.map(task =>
						<Task key={task.id}
							task={task}
							deleteTask={deleteTask}
						/>
					)
					: <h2>Задачи отстутствуют</h2>
			}
		</div>
	)
}

export default Tasklist