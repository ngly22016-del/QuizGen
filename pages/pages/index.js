import { useState } from 'react'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [difficulty, setDifficulty] = useState('medium')
  const [question, setQuestion] = useState(null)

  const generateQuiz = async () => {
    setQuestion(`Generate a ${difficulty} quiz about ${topic}.`)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">QuizGen 🧠</h1>

      <input
        className="border border-blue-300 rounded p-2 w-64 mb-4"
        type="text"
        placeholder="Enter topic (e.g. Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <select
        className="border border-blue-300 rounded p-2 w-64 mb-4"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={generateQuiz}
      >
        Generate Quiz
      </button>

      {question && (
        <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md text-center">
          <h2 className="font-semibold mb-2">Generated Question:</h2>
          <p>{question}</p>
        </div>
      )}
    </main>
  )
          }
        
