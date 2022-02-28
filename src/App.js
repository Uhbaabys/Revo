import './App.css';
import Header from './components/Header/Header'
import GiftSetForm from './components/GiftSet/GiftSetForm'
import GoodsForm from "./components/Goods/GoodsForm";
import CoffeeBuildForm from "./components/CoffeeBuild/CoffeeBuildForm";
import Footer from "./components/Footer/Footer";
import CoffeeCombo from "./components/CoffeeCombo/CoffeeCombo";

function App() {
  return (
    <div className="App">
        <div>
          <Header/>
          <CoffeeBuildForm />
          <GoodsForm />
          <GiftSetForm />
            <CoffeeCombo />
          <Footer />
        </div>
    </div>
  );
}

export default App;
