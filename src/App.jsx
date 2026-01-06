import { useEffect, useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        if (!res.ok) throw new Error('Falha ao buscar personagens')
        const json = await res.json()
        setCharacters(json)
      } catch (e) {
        setError(e.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Personagens de Harry Potter
        </h1>
        <p className="mt-2 text-gray-400">
          Fonte: hp-api.onrender.com
        </p>
      </header>

      <main className="container mx-auto px-6 pb-16">
        {loading && (
          <div className="flex justify-center">
            <span className="animate-pulse text-gray-300">Carregando...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-800/30 border border-red-700 text-red-200 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && (
          <ul className="divide-y divide-gray-800 rounded border border-gray-800 bg-gray-850">
            {characters.map((c) => (
              <li
                key={c.id || `${c.name}-${c.actor}`}
                className="px-4 py-3"
              >
                <span className="text-base sm:text-lg">{c.name}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export default App
