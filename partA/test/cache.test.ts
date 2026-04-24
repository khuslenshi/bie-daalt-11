import { CacheFactory } from "../lib/api/CacheFactory";

describe("LRU Cache Tests", () => {
  test("LRU put and get", () => {
    const cache = CacheFactory.create<string, number>("LRU", 2);
    cache.put("a", 1);
    expect(cache.get("a")).toBe(1);
  });

  test("LRU removes least recently used item", () => {
    const cache = CacheFactory.create<string, number>("LRU", 2);
    cache.put("a", 1);
    cache.put("b", 2);
    cache.get("a");
    cache.put("c", 3);
    expect(cache.get("b")).toBeNull();
  });

  test("LRU remove key", () => {
    const cache = CacheFactory.create<string, number>("LRU", 2);
    cache.put("a", 1);
    expect(cache.remove("a")).toBe(true);
  });

  test("LRU clear", () => {
    const cache = CacheFactory.create<string, number>("LRU", 2);
    cache.put("a", 1);
    cache.clear();
    expect(cache.size()).toBe(0);
  });

  test("LRU size check", () => {
    const cache = CacheFactory.create<string, number>("LRU", 2);
    cache.put("a", 1);
    cache.put("b", 2);
    expect(cache.size()).toBe(2);
  });
});

describe("LFU Cache Tests", () => {
  test("LFU put and get", () => {
    const cache = CacheFactory.create<string, number>("LFU", 2);
    cache.put("x", 10);
    expect(cache.get("x")).toBe(10);
  });

  test("LFU removes least frequently used", () => {
    const cache = CacheFactory.create<string, number>("LFU", 2);
    cache.put("x", 10);
    cache.put("y", 20);
    cache.get("x");
    cache.put("z", 30);
    expect(cache.get("y")).toBeNull();
  });

  test("LFU remove", () => {
    const cache = CacheFactory.create<string, number>("LFU", 2);
    cache.put("x", 10);
    expect(cache.remove("x")).toBe(true);
  });

  test("LFU clear", () => {
    const cache = CacheFactory.create<string, number>("LFU", 2);
    cache.put("x", 10);
    cache.clear();
    expect(cache.size()).toBe(0);
  });

  test("LFU size", () => {
    const cache = CacheFactory.create<string, number>("LFU", 2);
    cache.put("x", 10);
    cache.put("y", 20);
    expect(cache.size()).toBe(2);
  });
});

describe("TTL Cache Tests", () => {
  test("TTL put and get immediately", () => {
    const cache = CacheFactory.create<string, number>("TTL", 1000);
    cache.put("m", 7);
    expect(cache.get("m")).toBe(7);
  });

  test("TTL remove", () => {
    const cache = CacheFactory.create<string, number>("TTL", 1000);
    cache.put("m", 7);
    expect(cache.remove("m")).toBe(true);
  });

  test("TTL clear", () => {
    const cache = CacheFactory.create<string, number>("TTL", 1000);
    cache.put("m", 7);
    cache.clear();
    expect(cache.size()).toBe(0);
  });

  test("TTL size", () => {
    const cache = CacheFactory.create<string, number>("TTL", 1000);
    cache.put("m", 7);
    cache.put("n", 8);
    expect(cache.size()).toBe(2);
  });

  test("TTL expired item returns null", done => {
    const cache = CacheFactory.create<string, number>("TTL", 100);
    cache.put("m", 7);

    setTimeout(() => {
      expect(cache.get("m")).toBeNull();
      done();
    }, 150);
  });
});
