import React from 'react';
import StarField from '../../Components/StarsFile';
import Certificate from './Certificate';
import SEO from '../../Components/SEO';
import StructuredData from '../../Components/StructuredData';
import { seoConfig } from '../../config/seoConfig';

const MainCertificate = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.certificates;

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={`${seoConfig.default.siteUrl}${canonicalUrl}`}
      />
      <StructuredData data={seoConfig.structuredData} />
      <StarField>
        <Certificate />
      </StarField>
    </>
  );
};

export default MainCertificate;
