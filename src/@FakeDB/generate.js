import { faker } from '@faker-js/faker';

const generateInovicesUser = (count) => {
  const list = [];
  Array.from({ length: count }).forEach(() => {
    list.push({
      id: faker.datatype.uuid(),
      typeof: faker.helpers.arrayElement(['Payment', 'Subscription', 'Refund']),
      date: faker.date.past(),
      amount: faker.finance.amount(),
      status: faker.helpers.arrayElement(['Paid', 'Pending', 'Canceled']),
      payment: faker.helpers.arrayElement(['Paypal', 'Credit Card', 'Gift Card']),
    });
  });
  return list;
};
const createRandomUser = () => ({
  id: faker.datatype.uuid(),
  verified: faker.datatype.boolean(),
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
  payments: {
    paypal: faker.finance.iban(),
    creditCard: faker.finance.creditCardNumber('visa'),
    bic: faker.finance.bic(),
    iban: faker.finance.iban(),
  },
  inovices: generateInovicesUser(15),
  media: [faker.image.avatar(), faker.image.city(),
    faker.image.food(), faker.image.cats(), faker.image.fashion(),
    faker.image.avatar(),
  ],
});

const generateRandomUsers = (count) => {
  const users = [];
  Array.from({ length: count }).forEach(() => {
    users.push(createRandomUser());
  });
  return users;
};

export default generateRandomUsers;
