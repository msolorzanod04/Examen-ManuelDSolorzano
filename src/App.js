import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';
import React from 'react';
import Router from 'react';
import MenuElementos from './components/MenuElementos';

function App() {
  return (
    <div>
     {/*<Router>
     <Menu />
     {MenuElementos.map((item) => {
       return (
         <Route
           key={item.id}
           path={item.path}
           exact
           component={item.component}
         />
       );
     })}
    </Router>*/}
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
    </div>
  );
}

export default App;
