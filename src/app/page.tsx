async function getMessage() {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()
  return data.message
}

export default async function Home() {
  const message = await getMessage()

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to a Next.js boilerplate</h1>
      <p className="text-xl">{message}</p>
    </main>
  )
}
