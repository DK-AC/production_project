import { classNames } from './classNames';

describe('classNames empty', () => {
  test('classNames', () => {
    expect(classNames('')).toBe('');
  });

  test('classNames to be cls', () => {
    expect(classNames('cls')).toBe('cls');
  });

  test('classNames additional', () => {
    const expected = 'cls someClass';

    expect(classNames('cls', {}, ['someClass'])).toBe(expected);
  });

  test('classNames to be cls', () => {
    const expected = 'cls someClass collapsed';

    expect(classNames('cls', { collapsed: true }, ['someClass'])).toBe(expected);
    // expect(classNames('cls', { collapsed: true, hovered: false }, ['someClass'])).toBe(expected)
  });

  test('classNames to be cls', () => {
    const expected = 'cls someClass collapsed';

    expect(classNames('cls', { collapsed: true, hovered: false }, ['someClass'])).toBe(expected);
  });

  test('should return the base class if no mods or additional classes are provided', () => {
    const result = classNames('base-class');
    expect(result).toBe('base-class');
  });

  test('should include additional classes when provided', () => {
    const result = classNames('base-class', {}, ['additional-class1', 'additional-class2']);
    expect(result).toBe('base-class additional-class1 additional-class2');
  });

  test('should include mods that have truthy values', () => {
    const mods = {
      'mod-class1': true,
      'mod-class2': Boolean(1),
      'mod-class3': 'active',
      'mod-class4': false,
    };
    const result = classNames('base-class', mods);
    expect(result).toBe('base-class mod-class1 mod-class2 mod-class3');
  });

  test('should exclude mods that have falsy values', () => {
    const mods = {
      'mod-class1': true,
      'mod-class2': Boolean(0),
      'mod-class3': '',
      'mod-class4': Boolean(null),
    };
    const result = classNames('base-class', mods);
    expect(result).toBe('base-class mod-class1');
  });

  test('should exclude mods and additional classes that evaluate to false', () => {
    const mods = {
      'mod-class1': true,
      'mod-class2': false,
      'mod-class3': Boolean(0),
    };
    const additional = ['additional-class1', '', 'additional-class2']; // Empty string should be excluded
    const result = classNames('base-class', mods, additional);
    expect(result).toBe('base-class additional-class1 additional-class2 mod-class1');
  });
});
