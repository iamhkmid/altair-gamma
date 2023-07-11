import { styled } from "styled-components"
import { hexToRgbA } from "../../utils/hexToRgbA"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-left">
        <p>© 2023 Altair Gamma, by Muhammad Luqmanul Hakim</p>
      </div>
      <div className="footer-right">

      </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 10px 20px;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L10, 0.2)};
  box-sizing: border-box;
  .footer-left {
    display: flex;
    > p {
      font-size: 10px;
      font-weight: 500;
      margin: 0;
      color: ${({ theme }) => theme.colors.text.L4};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
        font-size: 12px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 13px;
      }
    }
  }
  .footer-right {
    display: flex;
  }
`