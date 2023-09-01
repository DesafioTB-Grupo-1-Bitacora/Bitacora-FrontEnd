import { styled } from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space around;
    align-items: center;
`;

const Tooltip = styled.div`
  display: none;
  position: absolute;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-110%);
  background-color: var(--gris-oscuro, #616163);
  padding: 10px;

  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
`;

const CreateMemoryButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  z-index: 10;
  background-img: url("assets/addMemory.png");
  background-size: auto;
  cursor: pointer;
  margin: 5px;
  box-shadow: 0px 2px 8px 0px rgba(97, 97, 99, 0.5) inset;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;

  &:hover .tooltip {
    display: block;
  }
`;

export default {
    Container,
    Tooltip,
    CreateMemoryButton
}