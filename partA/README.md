# Part A - API дизайн ба сан

## A.1 Муу API шинжилгээ

Доорх API нь API дизайны олон зарчмыг зөрчсөн байна:

### 1. Нэршлийн алдаа (Naming)
`usr_mgr`, `get_u`, `find` зэрэг нь ойлгомжгүй, товчилсон нэртэй.
→ Зөв: `UserManager`, `getUser`, `searchUsers`

### 2. Мэдээллийн далдлалт зөрчсөн (Encapsulation)
`db_conn`, `users_arr` public байна.
→ Дотоод мэдээлэл ил гарсан.

### 3. any төрлийн хэт хэрэглээ
`any` ашигласан нь type safety алдагдуулна.

### 4. Flag parameter ашигласан (Code smell)
`do_user_op(obj, flag, timeout)`
→ flag: 0,1,2 гэх мэт нь ойлгомжгүй
→ Зөв: тусдаа method (createUser, updateUser...)

### 5. Нэг method олон үүрэгтэй (SRP зөрчсөн)
`do_user_op` нь create/update/delete бүгдийг хийж байна.

### 6. Алдааны буруу handling
`get_u` → 'ERR_404' string буцаадаг
→ Зөв: exception эсвэл structured response

### 7. Method signature ойлгомжгүй
`get_u(id_or_email, flag)`
→ ямар flag ямар утгатай нь тодорхойгүй

### 8. Exception тодорхойгүй
`find()` → SQLException throw гэж comment байна
→ API хэрэглэгчид ойлгомжгүй

## A.2 Сангийн дизайн

Энэ хэсэгт нэг public interface болон 3 өөр хэрэгжилттэй сан зохион байгуулна.

Сонгосон сэдэв:
(жишээ: Cache / Rate Limiter / Retry Policy)

(Дараа нь дэлгэрүүлнэ)

