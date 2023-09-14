import { prisma } from "@/libs/prisma";
import TaskCard from '@/components/TaskCard'
async function loadTask() {
  /* const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  console.log(data) */

  const tasks = await prisma.task.findMany();
  return tasks;
}

export const dynamic = 'force-dynamic'

async function HomePage() {
  const tasks = await loadTask();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => 
        <TaskCard task={task} key={task.id}/>)}
      </div>
    </section>
  );
}

export default HomePage;
