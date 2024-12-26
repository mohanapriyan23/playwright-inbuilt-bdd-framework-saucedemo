import { expect } from '@playwright/test';

export const Assertions = {
  async assertContainsText(actual: string | null, expectedSubstring: string) {
    expect(actual?.includes(expectedSubstring)).toBeTruthy();
  },
};
