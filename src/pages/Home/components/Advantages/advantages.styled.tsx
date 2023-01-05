import styled from 'styled-components'




export const AdvantagesStyled = styled.div.attrs({
  className: "advantages"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  h3{
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }

  .advantageCard{
    flex: 1 1 140px;
  }


  .advantages__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 24px;
    max-width: 650px;

  }

  img{
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: 60%;
    min-height: 400px;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px){
    margin-bottom: 40px;

    h3{
      font-size: 48px;
    }
  }

  @media (min-width: 1240px){
    height: 700px;
    justify-content: center;

    .advantages__container{
      transform: translateX(35%)
    }

    h3{
      max-width: 430px;
      transform: translateX(80%)
    }

    img{
      top: 0;
      width: 55%;
      align-self: flex-start;
      height: 100%;
    }
  }

`

export const AdvantageCardStyled = styled.div.attrs({
  className: "advantageCard"
})`

  display: flex;
  flex-direction: column;
  border: 8px solid ${(props: any) => props.color};
  justify-content: center;
  align-items: center;
  padding: 26px 24px;
  text-align: center;
  max-width: 320px;
  background: white;


  .advantageCard__title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .advantageCard__iconsContainer{
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
  }


  @media (min-width: 1024px) {
    font-size: ${(props: any) => props.fontSizeDesktop};;
    padding: ${(props: any) => props.paddingDesktop}
  }

`



export const AutonomyStyled = styled.div.attrs({
  className: "autonomy"
})`

  display: flex;
  align-items: center;
  margin-bottom: 24px;
  background-color: black;
  padding: 32px 24px;

  .autonomy__container{

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    img{
      max-width: 400px;
    }

    h3{
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      color:white;
    }


    .autonomy__items{
      color: white;

      &> div{
        display: flex;
        gap: 10px;
      }
    }

    .autonomy__cardsContainer{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      max-width: 650px;
    }

  }
`