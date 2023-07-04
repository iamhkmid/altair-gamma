import { useRouteError } from 'react-router-dom'

interface TError {
  message: string
}

export default function ErrorElement () {
  const error = useRouteError() as TError

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.message && (
        <p>
          <i>{error.message}</i>
        </p>
      )}
    </div>
  )
}
