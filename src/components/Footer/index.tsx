import { styled } from "styled-components"
import { hexToRgbA } from "../../utils/hexToRgbA"
import { footerData } from "../../utils/constants/footer"

const Footer = () => {

  const onClickMedia = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <FooterStyled>
      <div className="footer-left">
        <p>2023, Build by Muhammad Luqmanul Hakim.</p>
      </div>
      <div className="footer-right">
        <div className="media">
          {footerData.map((item) => (
            <div className="media-item" key={item.key} onClick={() => onClickMedia(item.url)}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 10px;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => hexToRgbA(theme.colors.blue.L10, 0.2)};
  box-sizing: border-box;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    padding: 0 20px;
  }
  .footer-left {
    display: flex;
    padding: 10px 0;
    > p {
      font-size: 9px;
      font-weight: 500;
      margin: 0;
      color: ${({ theme }) => theme.colors.text.L4};
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        font-size: 12px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        font-size: 13px;
      }
    }
  }
  .footer-right {
    display: flex;
    .media {
      display: flex;
      gap: 3px;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
        gap: 8px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
        gap: 10px;
      }
      .media-item {
        display: flex;
        padding: 5px;
        border-radius: 100%;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary.L2};
        }
        cursor: pointer;
        transition: all ease 0.3s;
        > svg {
          fill: ${({ theme }) => theme.colors.text.L4};
          width: 13px;
          height: 13px;
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
            width: 14px;
            height: 14px;
          }
          @media screen and (min-width: ${({ theme }) => theme.breakpoint.xxxl}px) {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
`