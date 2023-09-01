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
            {memories?.map((memory, index) => {
                return <Preview
                    key={index}
                    title={memory.title} 
                    date={memory.date} 
                    image={allMemories?.multimedia[index].files[0]} 
                    memoryLocation={memory.location} />
            })}          
        </Styled.Container>
    )
}

export default Collection;