import slack from '@slack/web-api'
import dotenv from 'dotenv'

dotenv.config()

const { WebClient } = slack

const token = process.env.SLACK_TOKEN
const web = new WebClient(token)

export default async function (req) {
  console.log(token)
  const conversationId = req.conversationId
  const message = req.message

  const res = await web.chat
    .postMessage({
      channel: conversationId,
      text: message,
    })
    .catch((error) => {
      return {
        resultCode: '500',
        resultMessage: `Sending message fail => ${error.message}`,
      }
    })

  return res.ok
    ? {
        resultCode: '200',
        resultMessage: 'Okay',
      }
    : {
        resultCode: '500',
        resultMessage: `Sending message fail`,
      }
}
