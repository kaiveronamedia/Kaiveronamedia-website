interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SHOW_PLACEHOLDERS?: string;
  readonly PUBLIC_DEPLOY_URL?: string;
  readonly PUBLIC_WEB3FORMS_KEY?: string;
  readonly PUBLIC_CF_BEACON_TOKEN?: string;
  readonly PUBLIC_ROI_CALCULATOR_URL?: string;
  readonly PUBLIC_CAL_LINK?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
