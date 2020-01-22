import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Este site possui 3 páginas, todas das quais são renderizadas
// dinamicamente no navegador não no servidor.
//Enquanto a página não atualiza, perceba como o
// React Router mantém a URL na medida em que você navega
// pelo site. Isto preserva o histórico do navegador,
// garantindo que algumas coisas como o botão voltar
// funcione corretamente.

export default function BasicRouting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />

        {/*
          Um <Switch> procura por cada um dos seus elementos filhos, 
          elementos <Route> e renderiza o primeiro cujo caminho
          corresponde  ao indicado pela url. Use o <Switch> sempre que
          você possuir múltiplas mas desejar que apenas uma 
          delas renderize de cada vez.
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Você pode pensar nestes componentes como 
// páginas no seu app

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
