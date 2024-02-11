import garageRepository from "../repository/garageRepository.js"

const consumeMessage = async (message) => {
  if (message.Body) {
    const messageBody = JSON.parse(message.Body)
    const garageEvent = JSON.parse(messageBody.Message)
    await garageRepository.saveGarageSO(garageEvent)
  }
}

export default {
  consumeMessage
}