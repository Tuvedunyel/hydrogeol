import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="error-page">
        <div className="container">
          <div className="logo">
            <img
              src="/hydrogeol-logo.svg"
              alt="Logo d'hydrogeol en forme de goutte"
              className="logo-img"
            />
            <div className="pulse"></div>
            <div className="pulse-1"></div>
          </div>
          <h1>Erreur 404</h1>
          <p>
            Oups ! On dirait que cette page est aussi introuvable qu'une source
            d'eau dans un puits. Retournez à <Link to="/">l'accueil</Link> pour
            continuer à explorer notre site
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Image d'un puits asséché avec le texte : "Oups ! On dirait que cette page est aussi introuvable qu'une source d'eau dans ce puits. Retournez à l'accueil pour continuer à explorer notre site."

// Un dessin d'une nappe phréatique avec un panneau "Page introuvable" qui flotte, accompagné du texte : "Il semblerait que cette page se soit perdue dans les profondeurs de notre aquifère. Essayez de chercher ailleurs ou retournez à l'accueil."

// Un schéma d'un système d'aquifère montrant différents éléments (eau, roches, sol) et un panneau "Erreur 404" à la place de l'eau, avec le texte : "Oups ! L'écoulement de l'information a été interrompu. Retournez à la source (page d'accueil) pour continuer votre navigation."

// Une représentation amusante d'un hydrogéologue portant des lunettes de plongée, une bouée et une lampe de poche, cherchant la page perdue avec le texte : "Nous avons envoyé notre expert pour retrouver cette page, mais en attendant, retournez à l'accueil pour continuer votre visite."

// Un dessin d'un barrage avec le texte : "Il semble que cette page ait été bloquée par un barrage. Retournez à l'accueil pour laisser l'information s'écouler librement."

export default ErrorPage;
