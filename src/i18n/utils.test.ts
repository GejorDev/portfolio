import { describe, it, expect } from 'vitest';
import { getLocalizedField, getLocalizedPerson } from './utils';

describe('getLocalizedField', () => {
  const mockData = {
    tagline_es: 'Hola',
    tagline_en: 'Hello',
    tagline: 'Hola (default)',
    name: 'Jorge',
  };

  it('should return localized field when suffix matches language', () => {
    expect(getLocalizedField(mockData, 'tagline', 'es')).toBe('Hola');
    expect(getLocalizedField(mockData, 'tagline', 'en')).toBe('Hello');
  });

  it('should fallback to unsuffixed field when localized field missing', () => {
    const dataWithoutSuffix = {
      tagline: 'Fallback',
      name: 'Test',
    };
    expect(getLocalizedField(dataWithoutSuffix, 'tagline', 'es')).toBe('Fallback');
    expect(getLocalizedField(dataWithoutSuffix, 'tagline', 'en')).toBe('Fallback');
  });

  it('should return empty string when both localized and unsuffixed missing', () => {
    const emptyData = { name: 'Test' };
    expect(getLocalizedField(emptyData, 'tagline', 'es')).toBe('');
  });
});

describe('getLocalizedPerson', () => {
  const personData = {
    name: 'Jorge',
    brandName: 'GejorDev',
    tagline_es: 'Desarrollador',
    tagline_en: 'Developer',
    fullBio_es: 'Biografía en español',
    fullBio_en: 'English biography',
    location_es: 'Buenos Aires',
    location_en: 'Buenos Aires',
    phone: '+54 11 1234 5678',
    email: 'jorge@example.com',
  };

  it('should return person object with localized fields replaced', () => {
    const personEs = getLocalizedPerson(personData, 'es');
    expect(personEs.tagline).toBe('Desarrollador');
    expect(personEs.fullBio).toBe('Biografía en español');
    expect(personEs.location).toBe('Buenos Aires');
    expect(personEs.name).toBe('Jorge'); // universal field unchanged

    const personEn = getLocalizedPerson(personData, 'en');
    expect(personEn.tagline).toBe('Developer');
    expect(personEn.fullBio).toBe('English biography');
    expect(personEn.location).toBe('Buenos Aires');
  });

  it('should preserve universal fields', () => {
    const person = getLocalizedPerson(personData, 'es');
    expect(person.phone).toBe('+54 11 1234 5678');
    expect(person.email).toBe('jorge@example.com');
    expect(person.brandName).toBe('GejorDev');
  });
});