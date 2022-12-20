import 'styled-components';

declare module "styled-components"{
    export interface MainTheme{
        name: string,
        colors: {
            main: string
        },
        fonts: [
            string
        ]
    }
}