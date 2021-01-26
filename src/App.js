import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import RecipesBuilder from './containers/RecipesBuilder/RecipesBuilder';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
       <Route path="/" exact component={RecipesBuilder} />
       </Switch>
      </Layout>
    </div>
  );
}

export default App;
