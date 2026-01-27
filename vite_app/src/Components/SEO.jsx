import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
    title = 'Jatin Rajvani - Full Stack Developer | Portfolio',
    description = 'Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects, skills, and experience in building innovative digital solutions.',
    keywords = 'Jatin Rajvani, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, UI/UX',
    ogImage = '/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl,
    noindex = false,
}) => {
    // Get current URL if canonical URL is not provided
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com/');

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    ogImage: PropTypes.string,
    ogType: PropTypes.string,
    twitterCard: PropTypes.string,
    canonicalUrl: PropTypes.string,
    noindex: PropTypes.bool,
};

export default SEO;
