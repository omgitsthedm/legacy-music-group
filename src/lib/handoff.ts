/**
 * Legacy's current customer-facing site continues to own booking and contact
 * intake until this Netlify property receives its custom-domain cutover.
 * These are outbound handoffs only; this application does not collect leads.
 */
export const CURRENT_LEGACY_SITE = 'https://legacymusicgroup.com'
export const BOOKING_HANDOFF_URL = `${CURRENT_LEGACY_SITE}/service-plus/`
export const CONTACT_HANDOFF_URL = `${CURRENT_LEGACY_SITE}/contacts/`
