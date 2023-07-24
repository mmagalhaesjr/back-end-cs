import prisma from 'Config/database'
import { ClassroomData } from 'App/Protocols'

export async function store(data: ClassroomData) {
  return await prisma.classrooms.create({
    data,
  })
}

export async function showById(id: number) {
  return await prisma.classrooms.findUnique({
    where: {
      id,
    },
  })
}

export async function showByRoomNumber(room_number: number) {
  return await prisma.classrooms.findFirst({
    where: {
      room_number,
    },
  })
}

async function update(id: number, data: ClassroomData) {
  return prisma.classrooms.update({
    where: {
      id: id,
    },
    data: { ...data, updated_at: new Date() },
  })
}

export async function destroy(id: number) {
  await prisma.classrooms.delete({
    where: {
      id,
    },
  })
}

const ClassroomsRepository = {
  showById,
  showByRoomNumber,
  store,
  update,
  destroy,
}

export default ClassroomsRepository
