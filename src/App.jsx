import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { loadScript } from './load-script.js'

function App() {
  const [query, setQuery] = useState()
  const onChange = event => setQuery(event.target.value)
  const submit = event => {
    event.preventDefault()
    console.log(query)
  }
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      loadScript('/count-appender.js')
    }
  }, [inView])

  return (
    <>
      <div className="above-the-fold">
        <form onSubmit={submit}>
          <h2>Observer Searcher</h2>
          <input
            value={query}
            onChange={onChange}
            placeholder="Enter your search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div id="appendZone" ref={ref}></div> {/* <- our target via ref */}
    </>
  )
}

export default App
