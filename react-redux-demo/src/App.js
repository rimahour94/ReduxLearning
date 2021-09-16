import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import { Provider } from "react-redux"
import store from './Redux/store';

function App() {
  // console.log(store, "store")
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
