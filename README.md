### Users list

Загружает список пользователей из файла userList.json и сохраняет их в сторе.  
После этого можно просматривать/редактировать/удалять/создавать/фильтровать пользователей до перезагрузки страницы.  
Перезагрузка страницы сбрасывает прогресс.

#### Как запустить

1. Склонировать себе main ветку
2. Запустить команду `npm run dev`

#### Технологии

- Vue3 + Composition API
- TypeScript
- Pinia
- Vuetify
- Vitest + Vue-test-utils

#### Что есть в проекте

- настроен линтинг кода (EsLint, Stylelint, Prettier)
- подключен husky и pre-commit хук
- написаны тесты на некоторые обертки над Vuetify компонентами (например [CustomButton](https://github.com/gecheru/users-list/blob/main/src/shared/ui/CustomButton/CustomButton.spec.ts))
- настроены Github Actions на линтинг -> тесты -> билд
