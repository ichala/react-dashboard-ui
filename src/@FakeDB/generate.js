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
  address: faker.address.streetAddress(),
  country: faker.address.country(),
  status: faker.helpers.arrayElement(['Active', 'Banned', 'Desactivated']),
  media: [faker.image.avatar(), faker.image.city(),
    faker.image.food(), faker.image.cats(), faker.image.fashion(),
    faker.image.avatar(), faker.image.city(),
    faker.image.food(), faker.image.cats(), faker.image.fashion()],
});
const generateRandomUsers = (count) => {
  const users = [];
  Array.from({ length: count }).forEach(() => {
    users.push(createRandomUser());
  });
  return users;
};

export default generateRandomUsers;
