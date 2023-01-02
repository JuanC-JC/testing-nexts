import styled from "styled-components";

export const SectionCollapsibleStyled = styled.div
    // className: `sectionCollapsible`
`
    color: black ;
    font-size: 16px;

    & .sectionCollapsible_title{
        display: flex;
        padding: 20px;
        gap: 10px;
        border-radius: 8px;
        border: 2px solid pink;
        cursor: pointer;
    }

    .collapse > div{
        padding: 20px 0px;
    }
}
`