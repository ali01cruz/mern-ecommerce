import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />               {/*los Helmet son componentes dinamicos para el head*/}
    </Helmet>                        
  );
};

Meta.defaultProps = {
  title: 'Bienvenidos a TiendaVirtual',
  description: 'Tenemos los productos más baratos del mercado',
  keywords: 'electrónicos, artículos del hogar',
};

export default Meta;