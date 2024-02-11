import { Consumer } from "sqs-consumer"
import messageService from "../services/messageService.js"


const consumer = Consumer.create({
  queueUrl: process.env.AWS_SQS_QUEUE_URL,
  handleMessage: messageService.consumeMessage
})

consumer.on('error', (err) => {
  console.error(`Ocorreu um erro no consumidor: ${err.message}`)
})

consumer.on('processing_error', (err) => {
  console.error(`Ocorreu um erro ao processar a mensagem: ${err.message}`)
})


export default consumer