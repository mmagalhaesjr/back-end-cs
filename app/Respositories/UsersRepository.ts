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

async function update(
  id: number,
  { name, email, registration_number, dob, professor, student }: UserData
) {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      registration_number,
      dob: new Date(dob),
      professor,
      student,
      updated_at: new Date(),
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
  update,
  destroy,
}

export default UserRepository
