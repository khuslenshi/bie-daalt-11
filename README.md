# Part A - API дизайн ба сан

## A.1 Муу API шинжилгээ

(чи бичсэн 8 алдаа)

## Сайжруулсан API

(чи бичсэн improved explanation)

---

## A.2 Сангийн дизайн

Сонгосон сэдэв: Cache library (LRU, LFU, TTL)

Энэхүү сан нь нэг public `Cache` interface болон 3 concrete implementation-оос бүрдэнэ.

### Дизайны шийдэл
- `Cache` interface нь нийтлэг contract өгнө
- `LRUCache`, `LFUCache`, `TTLCache` нь дотоод хэрэгжилт
- `CacheFactory` ашиглан implementation нууцалсан
- `CacheException` ашиглан custom алдаа боловсруулсан

### Unit Test
Нийт 15 ширхэг unit test бичиж дараах зүйлсийг шалгасан:
- put/get
- capacity handling
- remove
- clear
- size
- TTL expiration# bie-daalt-11-API Design

## Оюутаны мэдэээлэл
Нэр: Б.Хүслэн
Оюутаны код: B242270107
Групп/Лабораторын цаг: 1-5

## Төслийн тухай
Энэхүү бие даалтын ажлаар API дизайны зарчмуудыг (мэдээллийн далдлалт, нэршил, REST архитектур) бодит код дээр хэрэгжүүлнэ. Мөн REST API боловсруулж, Postman ашиглан автомат тест бичнэ.

## Бүтэц
- partA - API дизайн ба сан
- partB - REST API ба тест
