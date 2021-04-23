import service from './service.js'
export async function sendMessage(req, res) {
  const data = await service(req.body)
  res.json(data)
}

export function noName(req, res) {}
