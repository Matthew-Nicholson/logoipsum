// import React from "react";
import "./App.scss";
import Layout from "./layout/Layout";
import Hero from "./components/hero/Hero";
import LogoList from "./components/logoList/LogoList";
import Card from "./components/card/Card";
import PACKAGES from "./data/packages.data";
import TabHeader from "./components/tabHeader/TabHeader";
import FeatureCard from "./components/featureCard/FeatureCard";
import FEATURES from "./data/features.data";

function App() {
  return (
    <Layout>
      <div className="app">
        <header className="app__header">
          <Hero />
          <LogoList />
        </header>

        <section className="app__features">
          <div className="feature-card-wrapper">
            {FEATURES.map((feature, idx) => (
              <FeatureCard key={`ft-card-${idx}`} {...feature} />
            ))}
          </div>
        </section>

        <section className="app__pricing">
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
