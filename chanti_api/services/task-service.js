
const addTask = Task => async (p) => {

    const task = new Task(p)
    try {
        const save = await task.save();
        if (save) {
            return ({
                status: "success",
                message: "task added succssfully!!!",
                payload: save
            })
        }
    } catch (error) {
        return ({
            status: "failed",
            message: "failed to add task!!!",
            payload: error
        })
    }

}



const getAllTasks = Task => async () => {
    try {
        let tasks = await Task.find({}).populate('task');
        if (task) {
            return ({
                status: "success",
                message: "all tasks",
                payload: tasks
            });
        }
    } catch (error) {
        return ({
            status: "error",
            message: "failed to get tasks",
            payload: null
        });
    }
}

const getTaskById = Task => async (id) => {
    if (id === undefined) {
        return ({
            status: "error",
            message: `Can't get task without a given id`,
            payload: null
        });
    }
    try {
        let task = await Task.findById(id);
        if (task) {
            return ({
                status: "success",
                message: `Get Task with _id=${id}`,
                payload: task
            });
        }
    } catch (error) {
        return ({
            status: "error",
            message: `Error to get task with _id=${id}`,
            payload: null
        });
    }
}


const updateTask = Task => async (id, task) => {
    if (task === undefined || JSON.stringify(task) === "{}") {
        return ({
            status: "error",
            message: "You should send taskname,fdate and sdate",
            payload: null
        })
    }
    try {
        let updatedTask = await Task.findByIdAndUpdate(id, task);
        if (updatedTask) {
            return ({
                status: "success",
                message: "Task updated successfully",
                payload: await Task.findById(id)
            });
        }
    } catch (error) {
        return ({
            status: "error",
            message: "failed to update task",
            payload: error
        })
    }

}

const updateTaskStatus = Task => async (id, fdate) => {
    fdatees = Object.values(STATUSES);
    const isStatusValid = fdatees.includes(fdate);

    if (!isStatusValid) {
        return ({
            status: "error",
            message: "wrong Status",
            payload: null
        });
    }
   else {
        try {
            let task = await Task.findById(id);
            if (task) {
                task.set({
                    fdate: fdate
                });
                await task.save();
                return ({
                    status: "success",
                    message: "Task Status updated successfully",
                    payload: task
                })
            } else {
                return ({
                    status: "error",
                    message: "task not found, update fdate is failed",
                    payload: null
                })
            }

        } catch (error) {
            return ({
                status: "error",
                message: "Update task fdate is failed",
                payload: null
            })
        }
    }
}



const deleteTask = Task => async (id) => {
    if (id === undefined) {
        return ({
            status: "error",
            message: `Can't delete task without a given id`,
            payload: null
        });
    }
    try {
        let task = await Task.deleteOne({_id:id});
        if (task) {
            return ({
                status: "success",
                message: `Task with _id=${id} has been deleted`,
                payload: task
            });
        }
    } catch (error) {
        return ({
            status: "error",
            message: `Failed to delete task with _id=${id}`,
            payload: null
        });
    }
}



module.exports = (Task) => {
    return {
        addTask: addTask(Task),
        
        getAllTasks: getAllTasks(Task),
        getTaskById: getTaskById(Task),
        updateTask: updateTask(Task),
        
        deleteTask: deleteTask(Task)
    }
}