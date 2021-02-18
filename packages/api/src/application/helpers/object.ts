export function omit<T, Key extends keyof T>(obj: T, key: Key): Omit<T, Key> {
  const { [key]: omitted, ...ret } = obj;
  return ret;
}
