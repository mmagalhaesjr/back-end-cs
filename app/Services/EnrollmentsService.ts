import EnrollmentsRepository from 'App/Respositories/EnrollmentsRepository'
import { EnrollmentData } from 'App/Protocols'
import ClassroomsRepository from '../Respositories/ClassroomsRepository';
import UserRepository from 'App/Respositories/UsersRepository';

export async function store({ student_id, classroom_id }: EnrollmentData) {
  const enrollment = await EnrollmentsRepository.show({ student_id, classroom_id })

  if (enrollment) throw new Error('Student already enrolled in this class')

  const classEnrollments = await ClassroomsRepository.showClassEnrolments(classroom_id)

  if (!classEnrollments) throw new Error('Classroom not found')

  if (!classEnrollments?.available) throw new Error('Classroom not available for enrollment')

  if (classEnrollments.capacity <= classEnrollments.enrollments.length) {
    throw new Error('Classroom capacity exceeded')
  }

  return await EnrollmentsRepository.store({ student_id, classroom_id })

}

export async function show(classroom_id: number) {
  const classEnrollments = await ClassroomsRepository.showClassEnrolments(classroom_id)

  if (!classEnrollments) throw new Error('Classroom not found')

  if (classEnrollments?.enrollments.length === 0) throw new Error('No enrollments for this class')

  return classEnrollments
}

export async function showStudentsEnrollment(student_id: number) {
  const student = await UserRepository.showById(student_id)
  if (!student) throw new Error('Student not found')

  const studentsEnrollments = await EnrollmentsRepository.showStudentsEnrollment(student_id)

  const enrollments = studentsEnrollments.map((e) => {
    return { room_number: e.classrooms.room_number, professor: e.classrooms.users?.name }
  })

  const response = { student: student.name, enrollments }
  return response
}

export async function destroy(id: number) {
  const enrollment = await EnrollmentsRepository.showById(id)
  if (!enrollment) throw new Error('Enrollment not found')

  await EnrollmentsRepository.destroy(id)
}

const EnrollmentsService = {
  show,
  showStudentsEnrollment,
  store,
  destroy,
}

export default EnrollmentsService
