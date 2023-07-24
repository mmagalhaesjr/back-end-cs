import prisma from 'Config/database'
import { UserData } from 'App/Protocols'

export async function store({
  name,
  email,
  registration_number,
  dob,
  professor,
  student,
}: UserData) {
  return await prisma.users.create({
    data: { name, email, registration_number, dob: new Date(dob), professor, student },
  })
}

export async function showById(id: number) {
  return await prisma.users.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      registration_number: true,
      dob: true,
    },
  })
}

export async function showByRegistratioNumber(registration_number: number) {
  return await prisma.users.findUnique({
    where: {
      registration_number,
    },
  })
}

export async function showByEmail(email: string) {
  return await prisma.users.findUnique({
    where: {
      email,
    },
  })
}

export async function destroy(id: number) {
  await prisma.users.delete({
    where: {
      id,
    },
  })
}

const UserRepository = {
  showById,
  showByEmail,
  store,
  showByRegistratioNumber,
  destroy,
}

export default UserRepository
