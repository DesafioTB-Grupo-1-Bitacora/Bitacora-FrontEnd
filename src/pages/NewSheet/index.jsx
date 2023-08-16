
import styled from 'styled-components';


const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 50px 40px;
  

`;
const NewSheet = () => {
   
    return (
        <>
        <Wrapper>
            <h1>Nueva Ficha</h1>

            <div class="form-example">
            <label for="title">Título: </label>
            <input type="text" name="name" id="name" required />
            </div>

            <div class="form-example">
            <label for="description">Descrición: </label>
            <input type="text" name="name" id="name" required />
            </div>

            <div>
            <label for="meeting-time">Día y hora:</label>
            <input
            type="datetime-local"
            id="travel-time"
            name="travel-time"
            value="2023-06-12T19:30"
            min="2022-06-07T00:00"
            max="2024-06-14T00:00"
            />
            </div>

            <div>
            <label for="meeting-time">Ubicación:</label>
            <input type="text" id="country" name="location" value="Lat y Long" readonly>    
            </input>
            </div>
            <div>
            <p>Botones multimedia</p>
            </div>
          
            <button> Publicar</button>
            </Wrapper>
        </>
    )
}

export default NewSheet;