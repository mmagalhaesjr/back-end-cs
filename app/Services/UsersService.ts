import UserRepository from 'App/Respositories/UsersRepository'

export async function show(id: number) {
  const user = await UserRepository.show(id)
  if (!user) throw new Error('User not found')

  return user
}

const UserService = {
  show,
}

export default UserService
