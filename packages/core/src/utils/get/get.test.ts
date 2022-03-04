import { get } from './get';

const sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

describe('@vident-ui/theme/get', () => {
  it('returns given value if value type is number', () => {
    expect(get(20, sizes)).toBe(20);
    expect(get(0, sizes)).toBe(0);
    expect(get(-20, sizes)).toBe(-20);
  });

  it('returns correct size from given sizes object', () => {
    expect(get('xs', sizes)).toBe(sizes.xs);
    expect(get('sm', sizes)).toBe(sizes.sm);
    expect(get('md', sizes)).toBe(sizes.md);
    expect(get('lg', sizes)).toBe(sizes.lg);
    expect(get('xl', sizes)).toBe(sizes.xl);
  });

  it('returns default value if size was not given', () => {
    expect(get(null, sizes, sizes.md)).toBe(sizes.md);
  });
});
