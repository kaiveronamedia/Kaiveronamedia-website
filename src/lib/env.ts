const env = import.meta.env;

export const SHOW_PLACEHOLDERS = env.PUBLIC_SHOW_PLACEHOLDERS === 'true';
export const SITE_URL = (env.PUBLIC_SITE_URL || 'https://veronamedia.co.uk').replace(/\/$/, '');
/** Where this build is served from: the preview URL on preview deployments, else the canonical site. */
export const DEPLOY_URL = (env.PUBLIC_DEPLOY_URL || SITE_URL).replace(/\/$/, '');
export const WEB3FORMS_KEY = env.PUBLIC_WEB3FORMS_KEY || '';
export const CF_BEACON_TOKEN = env.PUBLIC_CF_BEACON_TOKEN || '';
export const ROI_CALCULATOR_URL = env.PUBLIC_ROI_CALCULATOR_URL || 'https://roi.kaiverona.co.uk';
export const CAL_LINK = env.PUBLIC_CAL_LINK || 'kai-verona-pkvqef/video-roadmap';
