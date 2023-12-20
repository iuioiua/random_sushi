/** Different types of sushi. Hm... Yummy... */
export const SUSHI_TYPES = [
  "Nigiri", // Slices of raw fish over pressed vinegared rice
  "Sashimi", // Slices of raw fish without rice
  "Maki", // Rice and filling wrapped in seaweed
  "Uramaki", // Similar to maki, but rice is on the outside
  "Temaki", // Hand-rolled sushi in a cone shape
  "Futomaki", // Thick roll with rice and various fillings
  "Hosomaki", // Thin roll with rice and a single filling
  "Chirashi", // Assorted sashimi served over a bowl of rice
  "Inari", // Rice stuffed into a small pouch of fried tofu
  "Oshizushi", // Pressed sushi, often in a box mold
  "Gunkan", // Rice wrapped with seaweed and topped with various ingredients
  "Temari", // Ball-shaped sushi, often decorated
  "Kaisendon", // Seafood bowl, a variety of sashimi served over rice
  "Tekkamaki", // Tuna roll
  "Kappamaki", // Cucumber roll
  "Spicy Tuna Roll", // Tuna mixed with spicy mayo or sauce
  "California Roll", // Crab meat (or imitation), avocado, and cucumber
  "Dragon Roll", // Eel, crab, cucumber, avocado
  "Philadelphia Roll", // Salmon, avocado, and cream cheese
  "Rainbow Roll", // A variety of fish and avocado on top of a California roll
] as const;

/** Return type for {@linkcode randomSushi}. */
export type Sushi = typeof SUSHI_TYPES[number];

/**
 * Generate a type of sushi using a cryptographically secure random number
 * generator.
 * 
 * @example
 * ```ts
 * import { randomSushi } from "jsr:@iuioiua/random_sushi@1";
 * 
 * randomSushi(); // "Nigiri"
 * ```
 */
export function randomSushi(): Sushi {
  // Create a new Uint32 array of length 1
  const buffer = new Uint32Array(1);

  // Populate the array with a cryptographically secure random number
  crypto.getRandomValues(buffer);

  // Calculate a random index. The modulo operation ensures it's within the range of the array indices.
  const randomIndex = buffer[0] % SUSHI_TYPES.length;

  // Return the randomly selected item
  return SUSHI_TYPES[randomIndex];
}
