import React from 'react';
import StarField from '../../Components/StarsFile';
import Certificate from './Certificate';
import SEO from '../../Components/SEO';
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
        ogImage={seoConfig.default.ogImage}
        ogImageWidth={seoConfig.default.ogImageWidth}
        ogImageHeight={seoConfig.default.ogImageHeight}
      />
      <StarField>
        <Certificate />
      </StarField>
    </>
  );
};

export default MainCertificate;
