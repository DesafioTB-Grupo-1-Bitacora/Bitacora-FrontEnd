
import styled from 'styled-components';

const TitleView = styled.h1`
 font-size: 40px;
 background-color: grey;
 width: 100%;
 padding-left: 20%;
`;
const Wrapper = styled.section`
    height: 95vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    padding-left: 20%;
    font-size: 20px;
`;
const Profile = () => {
   
    return (
        <>
            <TitleView>Mi cuenta</TitleView>
       <Wrapper>
        
            <p>Nombre</p>
            <p>email</p>
            <p>contraseña</p>
            <p>fecha de creación</p>
            <p>Mis pedidos</p>
            <p>Mis fichas compartidas</p>
            <p>Mis fichas favoritas</p>
        </Wrapper>

        </>
    )
}

export default Profile;