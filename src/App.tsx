import './App.css';
import {SomePage} from "./pages/somePage";
import {SomeProvider} from "./store/someStore/providers/someProvider";

function App() {
    return (
        <SomeProvider>
            <SomePage/>
        </SomeProvider>
    );
}

export default App;
