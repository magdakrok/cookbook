import React from 'react';
import Layout from './hoc/Layout/Layout';
import RecipesBuilder from './containers/RecipesBuilder/RecipesBuilder';


function App() {
  return (
    <div>
      <Layout>
       <RecipesBuilder/>
      </Layout>
    </div>
  );
}

export default App;
