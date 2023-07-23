import prisma from 'Config/database'

export async function show(id: number) {
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

const UserRepository = {
  show,
}

export default UserRepository;
