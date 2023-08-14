import { useState } from 'react'

function App() {
  const [query, setQuery] = useState()
  const onChange = event => setQuery(event.target.value)
  const submit = event => {
    event.preventDefault()
    console.log(query)
  }

  return (
    <div className="above-the-fold">
      <form onSubmit={submit}>
        <h2>Unscheduled Searcher</h2>
        <input
          value={query}
          onChange={onChange}
          className="App-input"
          placeholder="Enter your search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App
