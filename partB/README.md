# Part B - REST API

Node.js + Express ашиглан Book CRUD REST API боловсруулсан.

 
## Endpoint жагсаалт
- GET /api/books
- GET /api/books/:id
- POST /api/books
- PUT /api/books/:id
- DELETE /api/books/:id

## Security
API бүх endpoint нь `x-api-key` header ашиглан хамгаалагдсан.

API KEY:
SECRET123

## Documentation
OpenAPI тодорхойлолт `docs/openapi.yaml` файлд бий.

## Testing
Postman дээр нийт 12 тест сценар төлөвлөсөн.
