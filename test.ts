import { assert } from "https://deno.land/std@0.209.0/assert/assert.ts";
import { SUSHI_TYPES, randomSushi, Sushi } from "./mod.ts";

Deno.test("randomSushi() returns a valid sushi type", () => {
  const sushi: Sushi = randomSushi();
  assert(SUSHI_TYPES.includes(sushi));
});

Deno.test("randomSushi() returns different sushi types for multiple calls", () => {
  const results = new Set<Sushi>();
  for (let i = 0; i < 100; i++) {
    results.add(randomSushi());
  }
  // This test might occasionally fail if the random function returns the same result 100 times.
  // However, the chances of that happening are astronomically low.
  assert(results.size > 1);
});