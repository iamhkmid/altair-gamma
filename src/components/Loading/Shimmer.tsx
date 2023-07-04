import { styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'

const Shimmer = () => {
  return <Main />
}

export default Shimmer

const Main = styled.div`
	position: absolute;
	z-index: 1;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderSkeleton;
  animation-timing-function: linear;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from(#f6f7f8),
    color-stop(0.2, #edeef1),
    color-stop(0.4, #f6f7f8),
    to(#f6f7f8)
  );
  background-image: -webkit-linear-gradient(
    left,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.01)} 0%,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.1)} 20%,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.3)} 40%,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.3)} 60%,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.1)} 70%,
    ${({ theme }) => hexToRgbA(theme.colors.text?.L3, 0.01)} 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;

  height: 100%;
  width: 100%;

  @keyframes placeholderSkeleton {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
