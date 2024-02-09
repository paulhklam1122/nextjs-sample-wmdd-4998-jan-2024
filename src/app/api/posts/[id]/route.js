import find from 'lodash.find'
import { unstable_noStore } from 'next/cache'

export async function GET(request) {
  const requestUrlArray = request.url.split('/')
  const urlLength = requestUrlArray.length

  const id = requestUrlArray[urlLength - 1]

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const post = await response.json()

  return Response.json({ post })
}
