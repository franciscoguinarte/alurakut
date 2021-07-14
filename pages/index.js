import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`

const MainGrid = styled.main`
  display : grid;
  grid-gap : 10px;
  padding: 16px;

  @media(min-width : 860px){
    grid-template-areas: "profileArea welcomeArea profileRealtionsArea";
    grid-template-columns : 160px 618px 312px;

  }

`

export default function Home() {
  return (
  
  <MainGrid> 
    <Box style={{ 'grid-area ': 'profileArea'}}>
      Imagem
    </Box>
    <Box style={{ 'grid-area ': 'welcomeArea'}}>
      Bem vindos
    </Box>
    <Box style={{ 'grid-area ': 'profileRelationsArea'}}>
      Comunidades
    </Box>
    
          
  </MainGrid>
  
  )
}
