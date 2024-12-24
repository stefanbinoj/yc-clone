import React from 'react'
import Form from 'next/form'

const SearchElement = ({query}:{query?:string}) => {
  return (
    <Form action="/" replace={false} >
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="query" defaultValue='' />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default SearchElement