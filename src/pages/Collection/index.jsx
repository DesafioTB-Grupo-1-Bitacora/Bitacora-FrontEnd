import Styled from "./styles";
import { useMemories } from "../../hooks/memories";
import { Link } from "wouter";
import Map from "../../components/Map";
import Preview from "../../components/Preview";

const Collection = () => {
  const { allMemories } = useMemories();
  const memories = allMemories?.data;

  return (
    <Styled.Container>
      <Map />
      <Styled.BoxNotebookAndMemories>
        <Link to="/">Cuadernos</Link>
        <Link to="/">Todos los memories</Link>
      </Styled.BoxNotebookAndMemories>
      <Styled.PreviewsContainer>
        {memories?.map((memory, index) => {
          const date = new Date(memory.date);
          const parsedDate = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;
          const multimedia = allMemories?.multimedia[index].files;
          let pickedImage;
          for (let file of multimedia) {
            if (file.tag === "image") {
              pickedImage = file.url;
              break;
            }
          }

          return (
            <Preview
              key={index}
              title={memory.title}
              date={parsedDate}
              image={pickedImage}
              memoryLocation={memory.location}
            />
          );
        })}
      </Styled.PreviewsContainer>
    </Styled.Container>
  );
};

export default Collection;
