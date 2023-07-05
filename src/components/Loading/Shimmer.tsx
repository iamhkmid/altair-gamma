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
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.01)} 0%,
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.1)} 20%,
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.2)} 40%,
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.2)} 60%,
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.1)} 80%,
    ${({ theme }) => hexToRgbA(theme.colors.text.L3, 0.01)} 100%
  );
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;

  @keyframes placeholderSkeleton {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`
