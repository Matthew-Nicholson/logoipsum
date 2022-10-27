// import React from "react";
import "./App.scss";
import Layout from "./layout/Layout";
import Hero from "./components/hero/Hero";
import LogoList from "./components/logoList/LogoList";
import Card from "./components/card/Card";
import PACKAGES from "./data/packages.data";
import TabHeader from "./components/tabHeader/TabHeader";

function App() {
  return (
    <Layout>
      <div className="app">
        <header className="app-header">
          <Hero />
          <LogoList />
        </header>

        <section className="price-section">
          <TabHeader title="Get the right plan for future product." />
          <div className="card-wrapper">
            {PACKAGES.map((card, idx) => (
              <Card key={`pck-${idx}`} {...card} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;

/*
<h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci suscipit voluptates saepe cumque modi!</p>

          <a href="/" className="link">
            Link
          </a>

          <br />
          <div className="demo">
            <div className="box primary">Primary</div>
            <div className="box secondary">Secondary</div>
            <div className="box accent">Accent</div>
            <div className="box neutral">Neutral</div>
            <div className="box base-200">Base</div>
          </div>
*/
