import styled , { MainTheme, css } from "styled-components"

//h1 mobile first
const H1_MOBILE = css`
  font-weight: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading4.weigth};
	font-size: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading4.size};
	line-height: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading4.lineHeight};
`
const H1_DESKTOP = css`
  font-weight: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading1.weigth};
	font-size: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading1.size};
	line-height: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading1.lineHeight};
`


//h5 mobile first
const H5_MOBILE = css`
	font-weight: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading5.weigth};
  font-size: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading5.size};
  line-height: ${({ theme }: { theme: MainTheme }) => theme.configFonts.heading5.lineHeight};
`

export default {
  H1_DESKTOP,
  H1_MOBILE,
  H5_MOBILE
}