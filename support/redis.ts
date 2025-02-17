import { Queue } from "bullmq";

const connection = {
  host: 'paybank-redis',
  port: 6379
}
const queueName = 'twoFactorQueue'
const queue = new Queue(queueName, {connection})

export const getJob = async () => {
  const allJobs = await queue.getJobs() //busca todos os jobs da fila
  return allJobs[0].data.code
}

export const cleanJobs = async() => {
  queue.obliterate()
}