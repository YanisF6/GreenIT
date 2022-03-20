import React, {useState} from "react";
import './App.css';

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
  ErrorBoundary,
  SearchProvider,
  SearchBox,
  Results,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  getConfig,
} from "./config/config-helper";

import image from './image-illustration2.jpg';

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};

let scrollerButton = document.getElementsByClassName('arrow');
window.onscroll = function(e) {
  if (this.pageYOffset < 300) {
    scrollerButton[0].style.display = 'block';
  } else {
    scrollerButton[0].style.display = 'none';
  }
};

const departements = [
  'Ain',
  'Aisne',
  'Allier',
  'Alpes-de-Haute-Provence',
  'Hautes-Alpes',
  'Alpes-Maritimes',
  'Ardèche',
  'Ardennes',
  'Ariège',
  'Aube',
  'Aude',
  'Aveyron',
  'Bouches-du-Rhône',
  'Calvados',
  'Cantal',
  'Charente',
  'Charente-Maritime',
  'Cher',
  'Corrèze',
  'Corse-du-Sud',
  'Haute-Corse',
  'Côte-d\'Or',
  'Côtes d\'Armor',
  'Creuse',
  'Dordogne',
  'Doubs',
  'Drôme',
  'Eure',
  'Eure-et-Loir',
  'Finistère',
  'Gard',
  'Haute-Garonne',
  'Gers',
  'Gironde',
  'Hérault',
  'Ille-et-Vilaine',
  'Indre',
  'Indre-et-Loire',
  'Isère',
  'Jura',
  'Landes',
  'Loir-et-Cher',
  'Loire',
  'Haute-Loire',
  'Loire-Atlantique',
  'Loiret',
  'Lot',
  'Lot-et-Garonne',
  'Lozère',
  'Maine-et-Loire',
  'Manche',
  'Marne',
  'Haute-Marne',
  'Mayenne',
  'Meurthe-et-Moselle',
  'Meuse',
  'Morbihan',
  'Moselle',
  'Nièvre',
  'Nord',
  'Oise',
  'Orne',
  'Pas-de-Calais',
  'Puy-de-Dôme',
  'Pyrénées-Atlantiques',
  'Hautes-Pyrénées',
  'Pyrénées-Orientales',
  'Bas-Rhin',
  'Haut-Rhin',
  'Rhône',
  'Haute-Saône',
  'Saône-et-Loire',
  'Sarthe',
  'Savoie',
  'Haute-Savoie',
  'Paris',
  'Seine-Maritime',
  'Seine-et-Marne',
  'Yvelines',
  'Deux-Sèvres',
  'Somme',
  'Tarn',
  'Tarn-et-Garonne',
  'Var',
  'Vaucluse',
  'Vendée',
  'Vienne',
  'Haute-Vienne',
  'Vosges',
  'Yonne',
  'Territoire de Belfort',
  'Essonne',
  'Hauts-de-Seine',
  'Seine-St-Denis',
  'Val-de-Marne',
  'Val-D\'Oise',
  'Guadeloupe',
  'Martinique',
  'Guyane',
  'La Réunion',
  'Mayotte',
]

export default function App() {
  const [list, setList] = useState([]);

  function submitSearch(e) {
    e.preventDefault();
    //let elt = document.getElementsByClassName('sui-layout-body');
    let results = document.getElementsByClassName('sui-result__details');
    let lis = results[0].getElementsByTagName("li");
    let values = [];
    for (var i = 0; i < lis.length; ++i) {
      values.push(lis[i].children[1].innerHTML);
    }
    let array = [
      { name: 'Score Global', ville: values[2], departement: values[0], region: values[17], score_ville: lis[10], score_departement: values[12], score_region: values[1]},
      { name: 'Accès aux interfaces numériques', ville: values[2], departement: values[10], region: values[17], score_ville: values[13], score_departement: values[18], score_region: values[11]},
      { name: 'Accès à l\'information', ville: values[2], departement: values[0], region: values[17], score_ville: values[14], score_departement: values[4], score_region: values[8]},
      { name: 'Compétences Numériques', ville: values[2], departement: values[0], region: values[17], score_ville: values[5], score_departement: values[15], score_region: values[6]},
      { name: 'Compétences Administratives', ville: values[2], departement: values[0], region: values[17], score_ville: values[3], score_departement: values[7], score_region: values[9]}
    ];
    setList(list => [...list, array]);
    console.log(list)
    //elt[0].style.display = 'block';
  }

  return (
    <div className="App">
      <div className='content'>
        <div className="first-look">
          <h1>Indice national de fragilité numérique</h1>
          <div className='main-bloc'>
            <div className='main-bloc-left'>
              <img src={image} alt='illustration logo'/>
            </div>
            <div className='main-bloc-right'>
              <p>L’indice de fragilité numérique révèle les territoires où la population est le plus à risque d’exclusion.
              De nombreux facteurs sont à l’origine de l’exclusion numérique. Ils sont regroupés en quatre axes qui constituent les principales causes de l’exclusion numérique.
              <br /><br />Cet outil permet de comparer votre indice de fragilité numérique avec votre département et votre région.</p>
            </div>
          </div>
          <a href="#inputbloc"><div className="arrow"></div></a>
        </div>
        <div id='inputbloc'></div>
        <hr className="main-hr"></hr>
        <h2>Recherchez votre commune</h2>
        <div className="input-bloc">
          <SearchProvider config={config}>
            <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
              {({ wasSearched }) => {
                return (
                  <div className="search-part">
                    <ErrorBoundary>
                      <Layout
                        header={<SearchBox autocompleteSuggestions={true} />}
                        bodyContent={
                          <Results
                            titleField={getConfig().titleField}
                            urlField={getConfig().urlField}
                            thumbnailField={getConfig().thumbnailField}
                            shouldTrackClickThrough={true}
                          />
                        }
                      />
                    </ErrorBoundary>
                  </div>
                );
              }}
            </WithSearch>
          </SearchProvider>
          <span className="submit-button" onClick={submitSearch}>CHERCHER</span>
        </div>
        <div className="scores-block">
          {list.map((item) => (
            <div key={item.name}>
              <h3>{ item.name }</h3>
              { item.name == "Score Global" && <p>description 1</p> }
              { item.name == "Accès aux interfaces numériques" && <p>description 2</p> }
              { item.name == "Accès à l\'information" && <p>description 3</p> }
              { item.name == "Compétences Numériques" && <p>description 4</p> }
              { item.name == "Compétences Administratives" && <p>description 5</p> }
              <table className="details-score">
                <tr className="scores-title">
                  <td>{ item.ville }</td>
                  <td>{ departements[item.departement] }</td>
                  <td>{ item.region }</td>
                </tr>
                <tr className="scores-number">
                  <td>{ item.score_ville }</td>
                  <td>{ item.score_departement }</td>
                  <td>{ item.score_region }</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
