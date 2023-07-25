import { users, classrooms, enrollments } from '@prisma/client'

export type UserData = Omit<users, 'id' | 'created_at' | 'updated_at'>

export type ClassroomData = Omit<classrooms, 'id' | 'created_at' | 'updated_at'>

export type EnrollmentData = Omit<enrollments, 'id' | 'created_at' | 'updated_at'>

