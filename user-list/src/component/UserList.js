import React, { useState } from 'react';
import Sublist from './Sublist';

function UserList({tasks, addListElem, id = null, 
	deleteTask, deleteSublist, setUp, setDown
}) {
	const [getValue, setValue] = useState('');
    const [getIndex, setIndex] = useState(0);

	const changeAddTask = (e) => { 
	setValue(e.target.value);
	}
	
	const clickAddTask = () => {

		if (getValue !== '') {
			
			if (!!id){
				addListElem({parentId: id, title: getValue, index: tasks.length});
			}
			else {
				addListElem({parentId: id, title: getValue, index: getIndex});
				setIndex(index => index += 1);
			}
			
			setValue('');
		}
	}

	return (
		<ul className="items-li">
			{tasks.map((task, index) => {
				return (
						<Sublist 
						key={index}
						taskTitle={task.title}
						task={task}
						index={index}
						tasks={tasks}
						addListElem={addListElem}
						deleteTask={deleteTask}
						getIndex={getIndex}
						setIndex={setIndex}
						deleteSublist={deleteSublist}
						setUp={setUp}
						setDown={setDown}
						/>
					);
				}
			)}
			<li>
				<input
					type="text"
					name="task-name"
					className="task-name"
					value={getValue}
					onChange={changeAddTask}
				/>
				<button type="button" className="btn" onClick={clickAddTask}>Add</button>
			</li>
		</ul>
	);
}

export default UserList;