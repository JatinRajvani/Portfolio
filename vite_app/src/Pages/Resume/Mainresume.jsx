import React from 'react';
import StarField from '../../Components/StarsFile';
import ResumePage from './resume';
import SEO from '../../Components/SEO';
import StructuredData from '../../Components/StructuredData';
import { seoConfig } from '../../config/seoConfig';
const MainResumePage = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.resume;
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
        <ResumePage />
      </StarField>
    </>
  );
};

export default MainResumePage;
