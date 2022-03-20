import React from "react";
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

function submitSearch(e) {
  e.preventDefault();
  let elt = document.getElementsByClassName('sui-layout-body');
  elt[0].style.display = 'block';
}

let scrollerButton = document.getElementsByClassName('arrow');
window.onscroll = function(e) {
  if (this.pageYOffset < 300) {
    scrollerButton[0].style.display = 'block';
  } else {
    scrollerButton[0].style.display = 'none';
  }
};

export default function App() {

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
        <hr></hr>
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
      </div>
    </div>
  );
}
