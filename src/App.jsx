import { useState, useEffect } from 'react'
import { loadScript } from './load-script.js'

function App() {
  const [query, setQuery] = useState()
  const onChange = event => setQuery(event.target.value)
  const submit = event => {
    event.preventDefault()
    console.log(query)
  }

  useEffect(() => {
    window.requestIdleCallback(() => loadScript('/count-appender.js'))
  }, [])

  return (
    <>
      <div className="above-the-fold">
        <form onSubmit={submit}>
          <h2>Idle Callback Searcher</h2>
          <input
            value={query}
            onChange={onChange}
            className="App-input"
            placeholder="Enter your search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div id="appendZone"></div> {/* <- no longer on the index.html */}
    </>
  )
}

export default App
