import React from 'react';
import StarField from '../../Components/StarsFile';
import ContactMe from './Contact.jsx';
import SEO from '../../Components/SEO';
import StructuredData from '../../Components/StructuredData';
import { seoConfig } from '../../config/seoConfig';

const MainContact = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.contact;

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
        <ContactMe />
      </StarField>
    </>

  );
};

export default MainContact;
