const BASE_URL = 'https://miraklasiaf.now.sh';

const title = 'Next Chakra Starter';
const description = 'Next.js with Chakra UI Starter Template';

const SEO = {
  title,
  description,
  canonical: `${BASE_URL}`,
  twitter: {
    handle: '@miraklasiaf',
    site: '@miraklasiaf',
    cardType: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `${BASE_URL}`,
    title,
    description,
    images: [
      {
        url: `${BASE_URL}/static/images/og.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
