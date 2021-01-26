import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import RecipesBuilder from './containers/RecipesBuilder/RecipesBuilder';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div>
      <Layout>
        {/* <Switch>
       <Route path="/" exact component={HomePage} />
       </Switch> */}
       <HomePage/>
      </Layout>
    </div>
  );
}

export default App;
