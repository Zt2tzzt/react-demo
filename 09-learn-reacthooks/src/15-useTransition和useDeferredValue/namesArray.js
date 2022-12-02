import { faker } from '@faker-js/faker'

const names = Array.from({ length: 10000 }).map(() => faker.name.fullName())
export default names

