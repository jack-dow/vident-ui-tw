import { capitalize } from './capitalize';

describe('@vident-ui/hooks/capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('hELLO')).toBe('HELLO');
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('returns empty string if value cannot be capitalized', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
  });
});
