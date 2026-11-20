import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Minimal typed JSON persistence over AsyncStorage. Callers own the schema:
 * pass a narrowing function so corrupt/legacy payloads degrade to fallback
 * instead of crashing.
 */
export async function readJson<T>(key: string, narrow: (raw: unknown) => T | null, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return narrow(parsed) ?? fallback;
  } catch {
    return fallback;
  }
}

export async function writeJson(key: string, value: unknown): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}
