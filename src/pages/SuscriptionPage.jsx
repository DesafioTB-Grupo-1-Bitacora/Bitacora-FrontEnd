import styled from 'styled-components'
import { Link, useLocation } from 'wouter'


const StyledWrapper = styled.div`
  padding: 32px 24px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 32px 315px;
  }
`;

const SuscriptionBox = styled.div`
height: 600px;
padding-top: 76px;
display: flex;
`
const ComenzarRegistro = styled.div`

padding: 32px 24px;

@media (min-width: 768px) {
  padding: 32px 180px;
} 


`
const Box = styled.div`
flex: 1;
height: auto;
display: flex;
flex-direction: column;

	p {
	
		padding: 26px;
	}

`

const HeadBox = styled.div`
font-size: 32px;
`
const TitleRegistro = styled.h1`
color: var(--negro, #0C0C0F);

/* Título 1 bold */
font-family: Kumbh Sans;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 24px;
`
const SubtitleRegistro = styled.p`
padding: 24px 0px;
font-size: 16px;
`


const RegButton = styled.button`
background-color: var(--gris-oscuro, #616163);
color: white;
border: none;
padding: 12px 24px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
width: 100%;
`




const SuscriptionPage = () => {
	return (
		<>
        <StyledWrapper>
<SuscriptionBox>
<Box>
<HeadBox>
Gratis
</HeadBox>
<div>
<p>5 memories máximo</p>
</div>
<div> <p>1 cuaderno</p></div>
 <p>500GB almacenamiento</p>
<RegButton >OK</RegButton>
</Box>

<Box>
<HeadBox>
Pro
</HeadBox>
<p>5 memories/cuaderno</p> <p>5 cuadernos</p> <p>1 TB almacenamiento</p> <p>1 impresión de cuaderno gratis</p>
<RegButton >OK</RegButton>


</Box>


<Box>
<HeadBox>
Premium
</HeadBox>

<p>Memories ilimitados</p> <p>cuadernos ilimitados</p> <p>ilimitado almacenamiento</p> <p>1 impresión de cuaderno gratis</p> <p>5% descuento siguientes impresiones de cuadernos</p>
<RegButton >OK</RegButton>

</Box>
</SuscriptionBox>
<ComenzarRegistro>
<TitleRegistro> ¿Aún no te decides? </TitleRegistro>
<Link to={'/'}>
<RegButton>Lea porqué TripMemories</RegButton>
</Link>
</ComenzarRegistro>
</StyledWrapper>
</>
	)
}

export default SuscriptionPage
