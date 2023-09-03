import styled from "styled-components";
import { Link, useLocation } from "wouter";

const StyledWrapper = styled.div`
  padding: 32px 24px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 32px 315px;
  }
`;

const SuscriptionBox = styled.div`
  height: 600px;

  display: grid;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const ComenzarRegistro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 32px 180px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300;
  height: 555;
  margin: 20px 14px;
  justify-content: space-between;

  @media (min-width: 768px) {
  }

  p {
    padding: 26px;
    font-size: 14px;
  }
`;

const HeadBox = styled.div`
  font-size: 32px;
  text-align: center;
  height: 246px;
  margin-bottom: 136px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
const TitleRegistro = styled.h1`
  color: var(--negro, #0c0c0f);

  font-family: Kumbh Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 100px;
  padding-bottom: 24px;
`;

const RegButton = styled.button`
  background-color: #00917f;
  color: white;
  border: none;
  padding: 12px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  width: auto;
`;

const SuscriptionPage = () => {
  return (
    <>
      <StyledWrapper>
        <SuscriptionBox>
          <Box>
            <HeadBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="247"
                viewBox="0 0 201 247"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M177.463 116.074C174.792 131.367 167.773 145.529 157.271 156.81C129.645 186.487 126.63 188.478 126.63 188.478L100.5 211.785L73.365 187.327C73.365 187.327 55.8334 170.297 43.7288 156.81C31.6241 143.322 26.2078 131.367 23.5371 116.074C20.8664 100.781 22.6619 85.0279 28.7016 70.7613C34.7414 56.4945 44.7605 44.3401 57.5208 35.8C70.2813 27.2597 85.2232 22.7084 100.5 22.7084C115.777 22.7084 130.719 27.2597 143.479 35.8C156.239 44.3401 166.259 56.4945 172.298 70.7613C178.338 85.0279 180.134 100.781 177.463 116.074ZM29.4354 174.43L100.5 246.682L171.565 174.43C185.62 160.14 195.191 141.933 199.069 122.113C202.946 102.292 200.956 81.7472 193.35 63.0765C185.743 44.4057 172.862 28.4477 156.335 17.2202C139.808 5.99266 120.377 0 100.5 0C80.6231 0 61.1924 5.99266 44.6654 17.2202C28.1382 28.4477 15.2569 44.4057 7.65026 63.0765C0.0436293 81.7472 -1.94668 102.292 1.93103 122.113C5.80874 141.933 15.3803 160.14 29.4354 174.43Z"
                  fill="#00917F"
                />
              </svg>
            </HeadBox>

            <p>
              5 memories máximo
              <br /> <br /> 1 cuaderno
              <br /> <br />
              500GB almacenamiento
            </p>
            <RegButton>OK</RegButton>
          </Box>

          <Box>
            <HeadBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="247"
                viewBox="0 0 201 247"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M177.463 116.074C174.792 131.367 167.773 145.529 157.271 156.81C129.645 186.487 126.63 188.478 126.63 188.478L100.5 211.785L73.365 187.327C73.365 187.327 55.8334 170.297 43.7288 156.81C31.6241 143.322 26.2078 131.367 23.5371 116.074C20.8664 100.781 22.6619 85.0279 28.7016 70.7613C34.7414 56.4945 44.7605 44.3401 57.5208 35.8C70.2813 27.2597 85.2232 22.7084 100.5 22.7084C115.777 22.7084 130.719 27.2597 143.479 35.8C156.239 44.3401 166.259 56.4945 172.298 70.7613C178.338 85.0279 180.134 100.781 177.463 116.074ZM29.4354 174.43L100.5 246.682L171.565 174.43C185.62 160.14 195.191 141.933 199.069 122.113C202.946 102.292 200.956 81.7472 193.35 63.0765C185.743 44.4057 172.862 28.4477 156.335 17.2202C139.808 5.99266 120.377 0 100.5 0C80.6231 0 61.1924 5.99266 44.6654 17.2202C28.1382 28.4477 15.2569 44.4057 7.65026 63.0765C0.0436293 81.7472 -1.94668 102.292 1.93103 122.113C5.80874 141.933 15.3803 160.14 29.4354 174.43Z"
                  fill="#FF9900"
                />
              </svg>
            </HeadBox>
            <p>
              5 memories/cuaderno
              <br /> <br />5 cuadernos
              <br />
              <br />1 TB almacenamiento
              <br />
              <br />1 impresión de cuaderno gratis
            </p>
            <RegButton>OK</RegButton>
          </Box>

          <Box>
            <HeadBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="247"
                viewBox="0 0 201 247"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M177.463 116.074C174.792 131.367 167.773 145.529 157.271 156.81C129.645 186.487 126.63 188.478 126.63 188.478L100.5 211.785L73.365 187.327C73.365 187.327 55.8334 170.297 43.7288 156.81C31.6241 143.322 26.2078 131.367 23.5371 116.074C20.8664 100.781 22.6619 85.0279 28.7016 70.7613C34.7414 56.4945 44.7605 44.3401 57.5208 35.8C70.2813 27.2597 85.2232 22.7084 100.5 22.7084C115.777 22.7084 130.719 27.2597 143.479 35.8C156.239 44.3401 166.259 56.4945 172.298 70.7613C178.338 85.0279 180.134 100.781 177.463 116.074ZM29.4354 174.43L100.5 246.682L171.565 174.43C185.62 160.14 195.191 141.933 199.069 122.113C202.946 102.292 200.956 81.7472 193.35 63.0765C185.743 44.4057 172.862 28.4477 156.335 17.2202C139.808 5.99266 120.377 0 100.5 0C80.6231 0 61.1924 5.99266 44.6654 17.2202C28.1382 28.4477 15.2569 44.4057 7.65026 63.0765C0.0436293 81.7472 -1.94668 102.292 1.93103 122.113C5.80874 141.933 15.3803 160.14 29.4354 174.43Z"
                  fill="#FF6600"
                />
              </svg>
            </HeadBox>
            <p>
              Memories ilimitados
              <br /> <br />
              cuadernos ilimitados
              <br /> <br />1 impresión de cuaderno gratis
              <br /> <br />
              almacenamiento ilimitado
              <br /> <br /> 5% descuento siguientes impresiones de cuadernos
            </p>
            <RegButton>OK</RegButton>
          </Box>
        </SuscriptionBox>

        <ComenzarRegistro>
          <TitleRegistro> ¿Aún no te decides? </TitleRegistro>
          <Link to={"/"}>
            <RegButton>Lea porqué TripMemories</RegButton>
          </Link>
        </ComenzarRegistro>
      </StyledWrapper>
    </>
  );
};

export default SuscriptionPage;
