import { useNavigate, useRouteError } from 'react-router-dom'
import { styled } from 'styled-components'
import Button from '../../components/Form/Button'

interface TError {
  message: string
}

export default function ErrorElement() {
  const navigate = useNavigate()
  const error = useRouteError() as TError

  return (
    <ErrorStyled id="error-page">
      <h1 className="title">Oops!</h1>
      <p className="description">Sorry, an unexpected error has occurred.</p>
      {error.message && (
        <p>
          <i>{error.message}</i>
        </p>
      )}
      <Button onClick={() => navigate("/home")} particles={10}>Back to home</Button>
    </ErrorStyled>
  )
}

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text.L5};
  .title {
    font-size: 40px;
    margin: 0;
  }
  .description {
    font-size: 18px;
    margin: 0;
  }
  .AltairButton-root {
    margin-top: 20px;
  }
`
