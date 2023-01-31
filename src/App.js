import React from 'react';
import CreateTask from './components/createTask';
import Tasklist from './components/tasklist';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [
				{
					id: Date.now().toString().slice(-4),
					taskName: 'Hello 1',
					isDisable: true,
				},

			],
			currentTask: {
				id: 0,
				taskName: '',
				isDisable: true,
			}
		}
	}

	addTask = (taskName) => (e) => {
		const newTask = this.state.currentTask;
		newTask.id = Date.now().toString().slice(-4)
		newTask.taskName = taskName;
		newTask.isDisable = true;
		if (newTask.taskName !== '') {
			const newTasks = [...this.state.tasks, newTask];
			this.setState({
				tasks: newTasks,
				currentTask: {
					id: Date.now(),
					taskName: '',
				}
			})
		}
	}

	deleteTask = (id) => (e) => {
		const filteredTasks = this.state.tasks.filter(task => task.id !== id);
		this.setState({ tasks: filteredTasks })
	}


	editTask = (taskName, id) => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === id) {
					task.taskName = taskName
				}
				return task
			}),
		})
	}

	render() {
		return (

			<div className="App">
				{console.log(this.state.tasks)}
				<CreateTask addTask={this.addTask} />
				<Tasklist tasks={this.state.tasks}
					deleteTask={this.deleteTask}
					editTask={this.editTask}
				/>
			</div>
		);
	}
}

export default App;
