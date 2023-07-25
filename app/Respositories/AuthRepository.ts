import prisma from 'Config/database'

export async function store(user_id: number, token: string) {
  return await prisma.tokens.create({
    data: { user_id, token },
  })
}

export async function show(token: string) {
  return await prisma.tokens.findUnique({
    where: { token },
    include: { users: true },
  })
}

const AuthRepository = {
  store,
  show,
}

export default AuthRepository
