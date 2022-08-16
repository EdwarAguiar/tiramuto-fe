import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Tiramuto</title>
        <meta name="description" content="Tiramuto - Pagina de Inicio" />
        <meta name="keywords" content="BLOG, E-commerce, HTML, CSS, JavaScript, React" />
        <meta name="author" content="Edwar J Aguiar" />
        <meta property="og:title" content="Tiramuto"/>
        <meta property="og:description" content="Tiramuto"/>
        <meta
          property="og:image"
          content="https://tiramuto.s3.us-east-2.amazonaws.com/img_edwaraguiar_v1.png"
        />
        <meta property="og:url" content="tiramuto.com" />
        <meta property="og:site_name" content="Tiramuto - Edwar Aguiar" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div>
        <h1>Home - Brilla Intensamente</h1> 
      </div>
    </>

  );
};

export default Home;