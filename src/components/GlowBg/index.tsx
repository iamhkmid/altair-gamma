import { styled } from 'styled-components'
import { hexToRgbA } from '../../utils/hexToRgbA'

const GlowBg = () => {
  return (
    <GlowBgStyled>
      <div className="light1" />
      <div className="light2" />
      <div className="light3" />
    </GlowBgStyled>
  )
}

export default GlowBg

const GlowBgStyled = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  
  .light1 {
    content: '';
    right: -150px;
    bottom: -120px;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      ${({ theme }) => hexToRgbA(theme.colors.primary?.L3, 0.5)}
    );
    border-radius: 50%;
    width: 600px;
    height: 1000px;
    margin-left: -400px;
    opacity: 0;
    transition: 0.3s all ease-in-out;
    animation: animate1 20s infinite;
  }
  
  .light2 {
    content: '';
    right: -100px;
    bottom: -200px;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose?.L9, 0.2)}, rgba(1, 65, 255, 0));
    width: 500px;
    height: 500px;
    animation: animate2 10s infinite;
  }

  @keyframes animate1 {
    0%   { opacity: 0.2;}
    50%   { opacity: 1;}
    50%   { opacity: 0.3;}
    50%   { opacity: 1;}
    100% { opacity: 0.2;}
  }
  
  @keyframes animate2 {
    0%   { opacity: 1;}
    50%   { opacity: 0.5;}
    100% { opacity: 1;}
  }
`
