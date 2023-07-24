import prisma from 'Config/database'
import { EnrollmentData } from 'App/Protocols'

export async function store(data: EnrollmentData) {
  return await prisma.enrollments.create({
    data,
  })
}

export async function show({ student_id, classroom_id }: EnrollmentData) {
  return await prisma.enrollments.findFirst({
    where: {
      student_id,
      classroom_id,
    },
  })
}

export async function showStudentsEnrollment(student_id: number) {
  return await prisma.enrollments.findMany({
    where: { student_id },
    select: {
      classroom_id: true,
      classrooms: {
        select: { owner: true, room_number: true, users: { select: { name: true } } },
      },
    },
  })
}

export async function showById(id: number) {
  return await prisma.enrollments.findUnique({
    where: {
      id,
    },
  })
}

export async function destroy(id: number) {
  await prisma.enrollments.delete({
    where: {
      id: id,
    },
  })
}
const enrollmentsRepository = {
  store,
  show,
  showStudentsEnrollment,
  showById,
  destroy,
}

export default enrollmentsRepository
