import { users, classrooms } from '@prisma/client'

export type UserData = Omit<users, 'id' | 'created_at' | 'updated_at'>

export type ClassroomData = Omit<classrooms, 'id' | 'created_at' | 'updated_at'>
