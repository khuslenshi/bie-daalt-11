export interface Cache<K, V> {

  /**
   * Cache-д утга хадгалах
   */
  put(key: K, value: V): void;

  /**
   * Cache-с утга авах
   */
  get(key: K): V | null;

  /**
   * Түлхүүр устгах
   */
  remove(key: K): boolean;

  /**
   * Cache цэвэрлэх
   */
  clear(): void;

  /**
   * Одоогийн хэмжээ
   */
  size(): number;
}
