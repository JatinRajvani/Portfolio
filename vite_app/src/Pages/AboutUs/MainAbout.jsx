import React from 'react';
import StarField from '../../Components/StarsFile';
import About from './About';
import SEO from '../../Components/SEO';
import { seoConfig } from '../../config/seoConfig';

const MainAbout = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.about;

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
        <About />
      </StarField>
    </>
  );
};

export default MainAbout;
