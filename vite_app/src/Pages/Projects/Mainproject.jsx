import React from 'react';
import StarField from '../../Components/StarsFile';
import Projects from './project';
import SEO from '../../Components/SEO';
import StructuredData from '../../Components/StructuredData';
import { seoConfig } from '../../config/seoConfig';
const MainProject = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.projects;
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
        <Projects />
      </StarField>
    </>
  );
};

export default MainProject;
