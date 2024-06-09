import ListCard from "./main/ListCard";
import Slider from "./main/Slider"
import Container from 'react-bootstrap/Container';


const Main = () => {
    return (
        <main>
            <Container>
                <Slider />
                <ListCard />
            </Container>
        </main>
    )
}

export default Main