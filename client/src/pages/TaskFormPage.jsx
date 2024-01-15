import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TasksFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()
    const navigate = useNavigate()

    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task updated', {
                position: "bottom-right"
            })
        } else {
            await createTask(data)
            toast.success('Task created', {
                position: "bottom-right"
            })
        }
        navigate('/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = await getTask(params.id)
                console.log(res)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    // the first register parameter will create a constant with the same name
                    {...register("title", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                {errors.title && <span>This field is required</span>}

                <textarea
                    placeholder="Description"
                    rows="3"
                    {...register("description", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'>
                </textarea>

                {errors.description && <span>This field is required</span>}

                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>

            {params.id && (
                <div className='flex justify-end'>
                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async () => {
                            const accepted = window.confirm('Are you sure?')
                            if (accepted) {
                                await deleteTask(params.id)
                                navigate("/tasks")
                                toast.success('Task removed', {
                                    position: "bottom-right"
                                })
                            }
                        }}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}