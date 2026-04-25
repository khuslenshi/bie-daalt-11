import { Cache } from "../api/Cache";

type Entry<V> = {
  value: V;
  expiry: number;
};

export class TTLCache<K, V> implements Cache<K, V> {
  private map = new Map<K, Entry<V>>();
  private ttl: number;

  constructor(ttl: number) {
    this.ttl = ttl;
  }

  put(key: K, value: V): void {
    this.map.set(key, {
      value,
      expiry: Date.now() + this.ttl
    });
  }

  get(key: K): V | null {
    const entry = this.map.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiry) {
      this.map.delete(key);
      return null;
    }

    return entry.value;
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
