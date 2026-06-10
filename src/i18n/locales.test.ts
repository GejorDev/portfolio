import { describe, it, expect } from 'vitest';
import es from './locales/es.json';
import en from './locales/en.json';

function extractKeys(obj: Record<string, any>, prefix = ''): string[] {
  let keys: string[] = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(extractKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

describe('Translation files', () => {
  it('should have identical key structure in es.json and en.json', () => {
    const esKeys = extractKeys(es).sort();
    const enKeys = extractKeys(en).sort();
    expect(enKeys).toEqual(esKeys);
  });

  it('should have no missing translation values', () => {
    const checkValues = (obj: Record<string, any>, path = '') => {
      for (const key in obj) {
        const fullPath = path ? `${path}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          checkValues(obj[key], fullPath);
        } else {
          expect(obj[key]).toBeTypeOf('string');
          expect((obj[key] as string).trim()).not.toBe('');
        }
      }
    };
    checkValues(es);
    checkValues(en);
  });
});