import { ThemeProvider, MainTheme, createGlobalStyle } from "styled-components";

const mainTheme: MainTheme = {
	name: "main-theme",
	colors: {
		main: "blue"
	},
	fonts: ["Roboto, sans-serif"]
}

type Props = {
	children: JSX.Element
}

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`

export function Theme({ children }: Props) {

	return (
		<ThemeProvider theme={mainTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>)

}

