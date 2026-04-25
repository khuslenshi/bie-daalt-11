import { Cache } from "../api/Cache";

export class LFUCache<K, V> implements Cache<K, V> {
  private values = new Map<K, V>();
  private freq = new Map<K, number>();
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  put(key: K, value: V): void {
    if (this.values.size >= this.capacity && !this.values.has(key)) {
      let minKey: K | null = null;
      let minFreq = Infinity;

      for (const [k, f] of this.freq.entries()) {
        if (f < minFreq) {
          minFreq = f;
          minKey = k;
        }
      }

      if (minKey !== null) {
        this.values.delete(minKey);
        this.freq.delete(minKey);
      }
    }

    this.values.set(key, value);
    this.freq.set(key, (this.freq.get(key) || 0) + 1);
  }

  get(key: K): V | null {
    if (!this.values.has(key)) return null;
    this.freq.set(key, (this.freq.get(key) || 0) + 1);
    return this.values.get(key)!;
  }

  remove(key: K): boolean {
    this.freq.delete(key);
    return this.values.delete(key);
  }

  clear(): void {
    this.values.clear();
    this.freq.clear();
  }

  size(): number {
    return this.values.size;
  }
}
