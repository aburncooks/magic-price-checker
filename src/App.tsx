import { useState } from 'react'
import setData from './data/sets.json'
import SetSelector from './components/SetSelector'
import CardList from './components/CardList'
import ValueInput from './components/ValueInput'
import type { Card } from './types/card'

const setDataModules = import.meta.glob<{ default: Card[] }>(
  ['./data/*.json', '!./data/sets.json'],
  { eager: true }
)

const cardsBySetCode: Record<string, Card[]> = Object.fromEntries(
  Object.entries(setDataModules).map(([path, mod]) => {
    const code = path.match(/\/([^/]+)\.json$/)![1].toUpperCase()
    return [code, mod.default]
  })
)

function App() {
  const [selectedSetCode, setSelectedSetCode] = useState(
    setData[0].code
  )
  const [minValue, setMinValue] = useState(1.0)

  const selectedCards = cardsBySetCode[selectedSetCode] ?? []

  return (
    <div className="flex items-center justify-center text-center py-[5vh]">
      <div className="flex flex-col items-center w-[90%] max-w-md ">
        <h1 className="text-3xl mb-2">Value Checker</h1>
        <h2 className="text-zinc-400 mb-4">Check the value of cards in a set while drafting.</h2>

        <div className="flex flex-row w-full justify-between gap-8 mb-4">
          <SetSelector
            sets={setData}
            value={selectedSetCode}
            onChange={setSelectedSetCode}
          />

          <ValueInput
            value={minValue}
            onChange={setMinValue}
          />
        </div>
        
        <hr className="mb-4 w-full max-w-md border-zinc-400" />
        <CardList
          cards={selectedCards}
          minValue={minValue}
        />
      </div>
    </div>
  )
}

export default App
