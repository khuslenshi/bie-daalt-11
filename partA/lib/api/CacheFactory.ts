import { Cache } from "./Cache";
import { LRUCache } from "../impl/LRUCache";

export type CacheType = "LRU";

export class CacheFactory {

  static create<K, V>(type: CacheType, capacity: number): Cache<K, V> {

    if (type === "LRU") {
      return new LRUCache<K, V>(capacity);
    }

    throw new Error("Unsupported cache type");
  }
}

