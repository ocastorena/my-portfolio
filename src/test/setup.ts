import "@testing-library/jest-dom";

// Vitest runs in JSDOM, which does not implement IntersectionObserver.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "0px";
  readonly scrollMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [0];

  constructor() {}

  disconnect(): void {}
  observe(): void {}
  unobserve(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = MockIntersectionObserver;
}
