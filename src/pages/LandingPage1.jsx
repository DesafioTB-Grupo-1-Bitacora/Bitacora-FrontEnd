import styled from 'styled-components'
import { Link, useLocation } from 'wouter'
import MapComponent from './MapPage'



const RectangleImage = styled.div`

align-self: stretch;
background: url(${({ src }) => src});
background-repeat: no-repeat;
background-size: auto;
border: solid black 1px;
border-radius: 10px;
background-size: cover;
height: 387px;
width: 100%;
margin-top: 32px;
@media (min-width: 768px) {

`
const StyledWrapper = styled.div`
  padding: 32px 24px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 32px 315px;
  }
`;

const FuncionalitiesIcons = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`
const IconsAndDEscription = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 36px;
align-self: stretch;


`
const Funcionality = styled(Link)`
display: flex;
width: 83.667px;
flex-direction: column;
align-items: center;
gap: 8px;
text-decoration: none;
color: inherit;
`
const TextFuncionality = styled.p`

text-align: center;

`
const ExplanationTitle = styled.h1`
color: var(--negro, #0C0C0F);
margin-top: 32px;
/* Título 1 bold */
font-family: Kumbh Sans;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const ExplanationSubtitle = styled.h2`
color: var(--negro, #0C0C0F);
margin-top: 32px;
/* Texto medium */
font-family: Kumbh Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
const ComenzarRegistro = styled.div`

padding: 32px 24px;


@media (min-width: 768px) {
  padding: 32px 180px;
} 


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

const SuscriptionBox = styled.div`
width: 1005px;
height: 600px;
padding-top: 76px;
display: flex;


`
const Box = styled.div`
flex: 1;
height: 105px;
display: flex;
flex-direction: column;


	p {
	
		padding: 26px;
	}

`

const HeadBox = styled.div`
font-size: 32px;




`


const LandingPage1 = () => {
	return (
		<>
		<MapComponent />


   <StyledWrapper>

			<FuncionalitiesIcons>
				<IconsAndDEscription>

					<Funcionality to={`/landingpage1`}>
		
			<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M12.8335 25.3333L5.88683 27.6493C5.76647 27.6895 5.63828 27.7005 5.51284 27.6814C5.38739 27.6622 5.26831 27.6135 5.1654 27.5393C5.0625 27.465 4.97874 27.3674 4.92102 27.2543C4.86331 27.1413 4.83331 27.0162 4.8335 26.8893V7.244C4.83353 7.07619 4.88634 6.91263 4.98444 6.77648C5.08255 6.64033 5.22099 6.53847 5.38016 6.48533L12.8335 4V14.6667V25.3333ZM12.8335 25.3333L20.8335 28M20.8335 28L28.2868 25.516C28.4462 25.4628 28.5848 25.3607 28.6829 25.2243C28.7811 25.0879 28.8337 24.924 28.8335 24.756V5.10933C28.8335 4.98255 28.8033 4.8576 28.7455 4.74476C28.6877 4.63192 28.6039 4.53444 28.501 4.46035C28.3982 4.38625 28.2792 4.33767 28.1538 4.3186M20.8335 28V13.3333" stroke="#0C0C0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.8335 5.33411V5.34744M23.6615 8.16211C24.221 7.60274 24.6021 6.89001 24.7566 6.11406C24.911 5.3381 24.8318 4.53377 24.5291 3.8028C24.2264 3.07182 23.7137 2.44704 23.0559 2.00746C22.3981 1.56788 21.6247 1.33325 20.8335 1.33325C20.0423 1.33325 19.2689 1.56788 18.6111 2.00746C17.9533 2.44704 17.4406 3.07182 17.1379 3.8028C16.8351 4.53377 16.756 5.3381 16.9104 6.11406C17.0649 6.89001 17.446 7.60274 18.0055 8.16211C18.5628 8.72077 19.5055 9.55544 20.8335 10.6674C22.2348 9.48077 23.1788 8.64611 23.6615 8.16211Z" stroke="#0C0C0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<TextFuncionality>Marca tu memory</TextFuncionality>
<svg xmlns="http://www.w3.org/2000/svg" width="73" height="4" viewBox="0 0 73 4" fill="none">
  <path d="M1.5 2H71.5" stroke="#0C0C0F" strokeWidth="3" strokeLinecap="round"/>
</svg>
					</Funcionality>

					<Funcionality to={`/landingpage1`}>
		
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
  <path d="M13.1668 25H4.50016C3.79292 25 3.11464 24.719 2.61454 24.219C2.11445 23.7189 1.8335 23.0406 1.8335 22.3333V6.33333C1.8335 5.62609 2.11445 4.94781 2.61454 4.44772C3.11464 3.94762 3.79292 3.66667 4.50016 3.66667H20.5002C21.2074 3.66667 21.8857 3.94762 22.3858 4.44772C22.8859 4.94781 23.1668 5.62609 23.1668 6.33333V11.6667M17.8335 1V6.33333" stroke="#0C0C0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.8335 21V21.0133M7.16683 1V6.33333M1.8335 11.6667H23.1668M24.6615 23.828C25.221 23.2686 25.6021 22.5559 25.7565 21.78C25.911 21.004 25.8318 20.1997 25.5291 19.4687C25.2264 18.7377 24.7137 18.1129 24.0559 17.6734C23.3981 17.2338 22.6247 16.9991 21.8335 16.9991C21.0423 16.9991 20.2689 17.2338 19.6111 17.6734C18.9533 18.1129 18.4406 18.7377 18.1379 19.4687C17.8351 20.1997 17.756 21.004 17.9104 21.78C18.0649 22.5559 18.446 23.2686 19.0055 23.828C19.5628 24.3867 20.5055 25.2213 21.8335 26.3333C23.2348 25.1467 24.1788 24.312 24.6615 23.828Z" stroke="#0C0C0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<TextFuncionality>Organiza los memories</TextFuncionality>
					</Funcionality>

					<Funcionality to={`/landingpage1`}>
			
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M16.167 25.3334C14.3428 24.2801 12.2734 23.7257 10.167 23.7257C8.06055 23.7257 5.99122 24.2801 4.16699 25.3334V8.00003C5.99122 6.94681 8.06055 6.39233 10.167 6.39233C12.2734 6.39233 14.3428 6.94681 16.167 8.00003V25.3334ZM16.167 25.3334C17.9912 24.2801 20.0606 23.7257 22.167 23.7257C24.2734 23.7257 26.3428 24.2801 28.167 25.3334V12" stroke="#0C0C0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.8335 6.6676V6.68094M25.6615 9.4956C26.221 8.93624 26.6021 8.22351 26.7566 7.44755C26.911 6.6716 26.8318 5.86727 26.5291 5.13629C26.2264 4.40532 25.7137 3.78053 25.0559 3.34095C24.3981 2.90137 23.6247 2.66675 22.8335 2.66675C22.0423 2.66675 21.2689 2.90137 20.6111 3.34095C19.9533 3.78053 19.4406 4.40532 19.1379 5.13629C18.8351 5.86727 18.756 6.6716 18.9104 7.44755C19.0649 8.22351 19.446 8.93624 20.0055 9.4956C20.5628 10.0543 21.5055 10.8889 22.8335 12.0009C24.2348 10.8143 25.1788 9.9796 25.6615 9.4956Z" stroke="#0C0C0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

			<TextFuncionality>Revive el viaje</TextFuncionality>
					</Funcionality>

				</IconsAndDEscription>
				</FuncionalitiesIcons>


		
					<ExplanationTitle>Marcar el lugar exacto en el mapa</ExplanationTitle>
					<ExplanationSubtitle>Añade tus memories para poder verlos más tarde todos agrupados en un cuaderno de viaje totalmente editable</ExplanationSubtitle>
		
					<RectangleImage src='src/assets/images/Rectangle1.png' ></RectangleImage>



					<ExplanationTitle>En tus viajes, no te dejes nada</ExplanationTitle>
					<ExplanationSubtitle>No te conformes sólo con fotos, crea recuerdos detallados añadiendo audio, música u originales stickers</ExplanationSubtitle>
					

					<RectangleImage src='src/assets/images/Rectangle2.png' ></RectangleImage>



		
					<ExplanationTitle>Mira, cambia y disfruta de nuevo</ExplanationTitle>
					<ExplanationSubtitle>
					Lo mejor de Tripmemories es dar rienda suelta a tus emociones y revivirlas en el cuaderno de viaje siempre que quieras 
					</ExplanationSubtitle>
			
				

					<RectangleImage src='src/assets/images/Rectangle3.png' ></RectangleImage>
					<ComenzarRegistro>
						<TitleRegistro> ¿Comenzamos? </TitleRegistro>
						<SubtitleRegistro>Centrarse en plasmar las experiencias de los viajes. Revivirlas siempre que quieras </SubtitleRegistro>
						<Link to={'/register'}>
				
						<RegButton>Registrarse</RegButton>
						</Link>
					</ComenzarRegistro>

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

export default LandingPage1
