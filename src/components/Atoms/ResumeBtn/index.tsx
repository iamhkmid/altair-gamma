import { styled } from "styled-components"
import { overviewData } from "../../../utils/constants/overview"
import { hexToRgbA } from "../../../utils/hexToRgbA"
import { downloadFile } from "../../../utils/downloadFile"

const ResumeBtn = () => {
  return (
    <ResumeBtnStyled onClick={() => downloadFile(overviewData.resume.url)}>
      {overviewData.resume.label}
      {overviewData.resume.endIcon}
      <div className="lightbtn1" />
      <div className="lightbtn2" />
    </ResumeBtnStyled>
  )
}

export default ResumeBtn

const ResumeBtnStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 5px;
  width: fit-content;
  border-radius: 20px;
  padding: 10px 10px 10px 15px;
  color: ${({ theme }) => theme.colors.text.L4};
  &:hover {
    background-color: ${({ theme }) => hexToRgbA(theme.colors.rose.L7, 0.3)};
    color: ${({ theme }) => theme.colors.text.L5};
  }
  font-size: 11px;
  font-weight: 600;
  transition: 0.3s all ease;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    font-size: 13px;
    padding: 10px 10px 10px 15px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
    font-size: 14px;
  }
  > svg {
    fill: currentColor;
    width: 15px;
    height: 15px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
      width: 20px;
      height: 20px;
    }
  }
  > div.lightbtn1 {
    content: '';
    top: -10px;
    left: -40px;
    position: absolute;
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose?.L7, 0.8)}, ${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0.1)}, rgba(1, 65, 255, 0));
    transform: translateZ(0);
    width: 200px;
    height: 150px;
    z-index: -1;
    animation: animatebtn1 10s infinite;
  } 
  > div.lightbtn2 {
    content: '';
    top: -30px;
    left: -40px;
    position: absolute;
    background: radial-gradient(${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0.6)}, ${({ theme }) => hexToRgbA(theme.colors.rose?.L8, 0)}, rgba(1, 65, 255, 0));
    transform: translateZ(0);
    width: 200px;
    height: 150px;
    z-index: -1;
    animation: animatebtn2 15s infinite;
  }
  @keyframes animatebtn1 {
    0%   { opacity: 0.5;}
    50%   { opacity: 1;}
    100% { opacity: 0.5;}
  }
  
  @keyframes animatebtn2 {
    0%   { opacity: 0; left: -200%;}
    50%   { opacity: 1; left: 100;}
    100% { opacity: 0; left: 150%;}
  }
`