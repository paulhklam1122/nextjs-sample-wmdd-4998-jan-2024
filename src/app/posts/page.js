// import { unstable_noStore as noStore } from 'next/cache'

import Button from '@/components/Button'
import Link from 'next/link'

const PostsIndex = async () => {
  // noStore()
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 5 }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const posts = await response.json()

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      {posts.map(({ id, body, title }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
          <Link href={{ pathname: `/posts/${id}`, query: { id, title, body } }}>
            <Button />
          </Link>
        </div>
      ))}
    </>
  )
}

export default PostsIndex
