import UserRepository from 'App/Respositories/UsersRepository'
import { UserData } from 'App/Protocols'

export async function store(data: UserData) {
  const user = await UserRepository.showByRegistratioNumber(data.registration_number)
  const userWithEmail = await UserRepository.showByEmail(data.email)

  if (user || userWithEmail) throw new Error('User already exists')

  return await UserRepository.store(data)
}

export async function show(id: number) {
  const user = await UserRepository.showById(id)
  if (!user) throw new Error('User not found')

  return user
}

const UserService = {
  show,
  store
}

export default UserService
