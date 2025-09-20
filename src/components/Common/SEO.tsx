import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Pragya Trust - Consciousness Studies & Spiritual Learning",
  description = "Explore consciousness and its practical application within the framework of Sanatan Hindu Dharma. Courses, workshops, and transformative programs.",
  keywords = "consciousness, vedanta, meditation, spirituality, sanatan dharma, yoga, courses, varanasi",
  image = "/images/hero-bg.jpg",
  url = "https://pragyatrust.com",
  type = "website"
}) => {
  const fullTitle = title.includes('Pragya Trust') ? title : `${title} | Pragya Trust`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pragya Trust" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Pragya Trust" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;