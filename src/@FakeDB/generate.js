import { faker } from '@faker-js/faker';

const createRandomUser = () => ({
  id: faker.datatype.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  phone: faker.phone.number(),
  birthday: faker.date.birthdate(),
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  sex: faker.name.sexType(),
  status: faker.helpers.arrayElement(['Active', 'Banned', 'Desactivated']),
});

export default createRandomUser;
