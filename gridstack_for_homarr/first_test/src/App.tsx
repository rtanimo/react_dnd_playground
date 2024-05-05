import GridStackComponent from "./GridStackComponent";
import { user } from "./userConfig";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <GridStackComponent apps={user.apps} widgets={user.widgets} />
        </div>
    );
};

export default App;
