import "@testing-library/jest-dom";

export class IntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [];

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return [];
  }

  unobserve() {
    return null;
  }
}
window.IntersectionObserver = IntersectionObserver;
global.IntersectionObserver = IntersectionObserver;

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  })),
  redirect: jest.fn(),
}));

jest.mock(
  "next/headers",
  async () =>
    await {
      cookies: jest.fn(() => ({
        set: jest.fn(),
        delete: jest.fn(),
        get: jest.fn(),
      })),
    }
);
