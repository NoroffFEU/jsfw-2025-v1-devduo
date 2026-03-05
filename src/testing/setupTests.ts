import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import "@testing-library/jest-dom";

// This runs after each test, ensuring that the DOM is cleaned up and all mocks are cleared to prevent test interference.
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
