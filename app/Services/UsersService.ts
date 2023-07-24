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

export async function update(id: number, data: UserData) {
  const user = await UserRepository.showById(id)
  if (!user) throw new Error('User not found')

  if (user.email !== data.email) {
    const emailAlreadyInUse = await UserRepository.showByEmail(data.email)
    if (emailAlreadyInUse) throw new Error('Conflict Error')
  }
  if (user.registration_number !== data.registration_number) {
    const registrationNumberInUse = await UserRepository.showByRegistratioNumber(data.registration_number)
    if (registrationNumberInUse) throw new Error('Conflict Error')
  }

  return await UserRepository.update(id, data)
}

export async function destroy(id: number) {
  const user = await UserRepository.showById(id)
  if (!user) throw new Error('User not found')

  await UserRepository.destroy(id)
}

const UserService = {
  show,
  store,
  update,
  destroy,
}

export default UserService
