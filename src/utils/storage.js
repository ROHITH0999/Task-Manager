// Retrieves tasks from localStorage, returns an empty array if there are no tasks
export const getTasks = () => {
    try {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks || [];
    } catch (error) {
        console.error("Error retrieving tasks from localStorage:", error);
        return [];
    }
};

// Saves tasks to localStorage
export const saveTasks = (tasks) => {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
};

// Adds a new task to the task list
export const addTask = (task) => {
    const tasks = getTasks();
    task.id = new Date().getTime(); 
    tasks.push(task);
    saveTasks(tasks);
};

// Updates an existing task
export const updateTask = (updatedTask) => {
    const tasks = getTasks().map(task => (Number(task.id) === Number(updatedTask.id) ? updatedTask : task));
    console.log(tasks);
    
    saveTasks(tasks);
};


// Deletes a task by ID
export const moveToTrash = (taskId) => {
    const tasks = getTasks().map((task)=>{
        if(Number(task.id) === Number(taskId)){
            return {...task, status: -1};
        }
        return task;
    });
    saveTasks(tasks);
};

export const permanentDeleteTask = (taskId) => {
    const tasks = getTasks().filter((task)=>Number(task.id) != Number(taskId));
    saveTasks(tasks);
};

export const markDone = (taskId) => {
    const tasks = getTasks().map((task)=>{
        if(Number(task.id) === Number(taskId)){
            return {...task, status: 1};
        }
        return task;
    });
    saveTasks(tasks);
};

// Filters tasks by their status
export const filterTasksByStatus = (status) => getTasks().filter(task => Number(task.status) === status);

// Gets tasks based on due date
export const getTasksByDueDate = (dueToday = true) => {
    const tasks = getTasks();
    return tasks.filter(task => {
        const taskDueDate = new Date(task.dueDate); 
        return taskDueDate > new Date() && Number(task.status) === 0; 
    });
};

// Retrieves overdue tasks (tasks past due date and not completed)
export const getOverdueTasks = () => {
    const tasks = getTasks();
    return tasks.filter(task => {
        const taskDueDate = new Date(task.dueDate);
        console.log(taskDueDate < new Date());
        console.log(new Date());
         
        return taskDueDate < new Date() && Number(task.status) === 0; 
    });
};
// Removes all tasks with status -1 (in Trash) from localStorage
export const clearTrash = () => {
    const tasks = getTasks().filter(task => Number(task.status) !== -1);
    saveTasks(tasks);
};

