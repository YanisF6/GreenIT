import './App.css';
import JsonDataDisplay from './convertData/dataTable'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='main-bloc'>
          <div className='main-bloc-left'>
            <h1>Indice national de fragilité numérique</h1>
            <p>L’indice de fragilité numérique révèle les territoires où la population est le plus à risque d’exclusion.
            De nombreux facteurs sont à l’origine de l’exclusion numérique. Ils sont regroupés en quatre axes qui constituent les principales causes de l’exclusion numérique
            <br /><br />Cet outil permet de comparer votre indice de fragilité numérique avec votre département et votre région</p>
          </div>
          <div className='main-bloc-right'>
            <h2>Affichez les données de votre commune</h2>
            <input type="text"></input>
          </div>
        </div>
        <JsonDataDisplay />
      </div>
    </div>
  );
}

export default App;
