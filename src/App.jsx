import { useCallback, useState } from 'react'
import './App.css'
import NumberList from './NumberList'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() =>
    [number, number + 1, number + 2]
    , [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    borderRadius: 10
  }
  return (
    <>

      <div
        style={theme}
        className='d-flex w-25 flex-column gap-3 m-auto my-5 rounded-3 shadow p-3 bg-success-subtle'
      >
        <legend className=''>useCallback Hook Example</legend>
        <input
          type="number"
          className='form-control'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          onClick={() => setDark((prevDark) => !prevDark)}
          className='btn btn-sm btn-info'
        >Change Theme</button>
        <NumberList getItems={getItems} theme={theme} />
      </div>
    </>
  )
}

export default App
