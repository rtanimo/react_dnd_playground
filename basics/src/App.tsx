import { Flex } from "@mantine/core";
import Board from "./components/Board";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <Flex justify="center" align="center" p={20}>
                <NavBar />
            </Flex>

            <Board />
        </div>
    );
}

export default App;
