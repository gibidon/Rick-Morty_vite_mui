import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <div>Ooops,page not found..</div>
      <div>
        <Link to="/">Go to main page</Link>
      </div>
    </>
  )
}
