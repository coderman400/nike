import {Hero, Footer, Offer, CustomerReview, Products, Services, SuperQuality, Subscribe} from './sections'
import Nav from './components/Nav.jsx'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Offer />
      </section>
      <section className="padding">
        <CustomerReview />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
