/**
 * Helper to get language-specific field from data object.
 * Assumes fields are suffixed with '_es' or '_en' (e.g., tagline_es, tagline_en).
 * Falls back to unsuffixed field (default Spanish) if localized field missing.
 *
 * @param obj - data object containing language-suffixed fields
 * @param field - base field name (without suffix)
 * @param lang - language code ('es' or 'en')
 * @returns localized string
 */
export function getLocalizedField(
  obj: Record<string, any>,
  field: string,
  lang: string
): string {
  const localizedField = `${field}_${lang}`;
  if (obj[localizedField] !== undefined) {
    return obj[localizedField];
  }
  // Fallback to unsuffixed field (assumed Spanish)
  return obj[field] || '';
}

/**
 * Returns a localized person object with language-specific fields resolved.
 * Universal fields (name, email, etc.) are copied as-is.
 * 
 * @param personData - raw person data from JSON
 * @param lang - language code ('es' or 'en')
 * @returns person object with tagline, fullBio, location replaced by localized versions
 */
export function getLocalizedPerson(personData: any, lang: string): any {
  return {
    ...personData,
    tagline: getLocalizedField(personData, 'tagline', lang),
    fullBio: getLocalizedField(personData, 'fullBio', lang),
    location: getLocalizedField(personData, 'location', lang),
  };
}

/**
 * Helper to get language-specific array from data object.
 * Assumes arrays are suffixed with '_es' or '_en' (e.g., fundamentos_es, fundamentos_en).
 * Falls back to unsuffixed array (default Spanish) if localized array missing.
 *
 * @param obj - data object containing language-suffixed arrays
 * @param field - base field name (without suffix)
 * @param lang - language code ('es' or 'en')
 * @returns localized array
 */
export function getLocalizedArray(
  obj: Record<string, any>,
  field: string,
  lang: string
): any[] {
  const localizedField = `${field}_${lang}`;
  if (Array.isArray(obj[localizedField])) {
    return obj[localizedField];
  }
  // Fallback to unsuffixed array (assumed Spanish)
  return Array.isArray(obj[field]) ? obj[field] : [];
}