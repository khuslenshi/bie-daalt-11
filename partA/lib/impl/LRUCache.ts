import { Cache } from "../api/Cache";

export class LRUCache<K, V> implements Cache<K, V> {

  private map = new Map<K, V>();
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  put(key: K, value: V): void {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
  }

  get(key: K): V | null {
    if (!this.map.has(key)) return null;

    const value = this.map.get(key)!;
    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  remove(key: K): boolean {
    return this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }

  size(): number {
    return this.map.size;
  }
}
