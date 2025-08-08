import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
};

const Seo = ({ title, description, keywords }: SeoProps) => {
  const fullTitle = `${title} | Mahato Coffee Rooftop`;
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
    </Helmet>
  );
};

export default Seo;
