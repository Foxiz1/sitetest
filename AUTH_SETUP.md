# Настройка системы авторизации BRX

## Как добавить email-адреса бустеров

Для добавления email-адресов ваших бустеров в систему авторизации, вам нужно отредактировать два файла:

### 1. Основной файл авторизации (script.js)

Откройте файл `script.js` и найдите массив `AUTHORIZED_EMAILS` в начале файла:

```javascript
const AUTHORIZED_EMAILS = [
    'booster1@example.com',
    'booster2@example.com',
    'booster3@example.com',
    'admin@brx.com',
    'whale@brx.com',
    'leonid@brx.com',
    'xavin@brx.com'
    // Добавьте сюда email-адреса ваших бустеров
];
```

Замените примеры на реальные email-адреса ваших бустеров.

### 2. Общий файл авторизации (auth.js)

Откройте файл `auth.js` и найдите тот же массив `AUTHORIZED_EMAILS`:

```javascript
const AUTHORIZED_EMAILS = [
    'booster1@example.com',
    'booster2@example.com',
    'booster3@example.com',
    'admin@brx.com',
    'whale@brx.com',
    'leonid@brx.com',
    'xavin@brx.com'
    // Добавьте сюда email-адреса ваших бустеров
];
```

Замените примеры на те же реальные email-адреса.

## Как работает система

1. **При первом заходе** пользователь видит форму авторизации
2. **При вводе email** система проверяет его в списке разрешенных
3. **При успешной авторизации** пользователь получает доступ ко всему сайту
4. **Сессия сохраняется** в браузере, поэтому повторный вход не требуется
5. **Кнопка "Выйти"** позволяет завершить сессию

## Безопасность

- Email-адреса хранятся в коде (не рекомендуется для продакшена)
- Для более серьезной защиты рекомендуется использовать серверную авторизацию
- Текущая система подходит для бета-тестирования

## Пример добавления нового бустера

```javascript
const AUTHORIZED_EMAILS = [
    'booster1@example.com',
    'booster2@example.com',
    'booster3@example.com',
    'admin@brx.com',
    'whale@brx.com',
    'leonid@brx.com',
    'xavin@brx.com',
    'newbooster@gmail.com',  // Новый бустер
    'anotherbooster@yandex.ru'  // Еще один бустер
];
```

**Важно:** Не забудьте обновить оба файла (`script.js` и `auth.js`) одинаково!
