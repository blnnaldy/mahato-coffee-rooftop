import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  addBusinessSchema?: boolean;
};

const Seo = ({ title, description, keywords, addBusinessSchema }: SeoProps) => {
  const fullTitle = `${title} | Mahato Coffee Rooftop`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Mahato Coffee Rooftop",
    "description": "Nikmati kopi terbaik di Mahato Coffee Rooftop dengan pemandangan kota yang memukau dan suasana yang nyaman.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kyai H. Taisir No.2 B, RT.3/RW.11",
      "addressLocality": "Palmerah",
      "addressRegion": "DKI Jakarta",
      "postalCode": "11480",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.7907"
    },
    "url": "https://coffeemahato.xyz",
    "telephone": "+6282246239567",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 16:00-03:00",
    "servesCuisine": "Coffee",
    "priceRange": "Rp 25.000 - Rp 50.000"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      {addBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
