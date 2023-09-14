"use client"
import {useRouter} from 'next/navigation'
function TaskCard({task}) {

  const router = useRouter()
  return (
    <div key={task.id} className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
     onClick={() => {
      router.push('/tasks/edit/' + task.id)
     }}>
            <h3 className="font-bold mb-2 txt-2x1">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createAt).toLocaleDateString() }</p>
          </div>
  )
}

export default TaskCard