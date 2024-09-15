import { multiply } from 'lodash';
import { test, expect } from 'vitest';

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6);
});
