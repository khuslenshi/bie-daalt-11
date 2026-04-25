import { Cache } from "./Cache";
import { LRUCache } from "../impl/LRUCache";
import { LFUCache } from "../impl/LFUCache";
import { TTLCache } from "../impl/TTLCache";
import { CacheException } from "./CacheException";

export type CacheType = "LRU" | "LFU" | "TTL";

export class CacheFactory {
  static create<K, V>(type: CacheType, capacity: number): Cache<K, V> {
    switch (type) {
      case "LRU":
        return new LRUCache<K, V>(capacity);
      case "LFU":
        return new LFUCache<K, V>(capacity);
      case "TTL":
        return new TTLCache<K, V>(capacity);
      default:
        throw new CacheException("Unsupported cache type");
    }
  }
}
