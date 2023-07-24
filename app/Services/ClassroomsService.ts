import ClassroomsRepository from 'App/Respositories/ClassroomsRepository'
import { ClassroomData } from 'App/Protocols'
import UserRepository from 'App/Respositories/UsersRepository'

export async function store(data: ClassroomData) {
  const classroom = await ClassroomsRepository.showByRoomNumber(data.room_number)
  if (classroom) throw new Error('Classroom already exists')

  const owner = await UserRepository.showById(data.owner)

  if (!owner || !owner.professor) throw new Error('Unauthorized! Only professors are allowed to create a classroom')

  return await ClassroomsRepository.store(data)
}

export async function show(id: number) {
  const classroom = await ClassroomsRepository.showById(id)
  if (!classroom) throw new Error('Classroom not found')

  return classroom
}

export async function update(id: number, data: ClassroomData) {
  const classroom = await ClassroomsRepository.showById(id)
  if (!classroom) throw new Error('Classroom not found')

  if (classroom.room_number !== data.room_number) {
    const roomNumberAlreadyInUse = await ClassroomsRepository.showByRoomNumber(data.room_number)
    if (roomNumberAlreadyInUse) throw new Error('Conflict Error')
  }
  if (classroom.owner !== data.owner) {
    const owner = await UserRepository.showById(data.owner)
    if (!owner || !owner.professor) throw new Error('Unauthorized! The owner must be a professor')
  }

  return await ClassroomsRepository.update(id, data)
}

export async function destroy(id: number) {
  const classroom = await ClassroomsRepository.showById(id)
  if (!classroom) throw new Error('Classroom not found')

  await ClassroomsRepository.destroy(id)
}

const ClassroomsService = {
  show,
  store,
  update,
  destroy,
}

export default ClassroomsService
