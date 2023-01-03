export const Arrow = ({rotation = 0}:{rotation:number}) => {


  return (
    <svg style={{transform: `rotate(${rotation}deg)`}} width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L10 10L18 2" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}