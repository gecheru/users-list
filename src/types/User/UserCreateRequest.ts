import type { User } from './User';

export type UserCreateRequest = Omit<User, 'id' | 'lastVisitedAt'>;
