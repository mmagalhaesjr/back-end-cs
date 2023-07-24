import { users } from '@prisma/client'

export type UserData = Omit<users, 'id' | 'created_at' | 'updated_at'>
