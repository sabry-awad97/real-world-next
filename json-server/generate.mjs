import { faker, simpleFaker } from '@faker-js/faker';
import fs from 'fs';

const generateFakeUser = () => {
  const uuid = simpleFaker.string.uuid();
  const profilePicture = faker.internet.avatar();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = faker.internet.userName({ firstName, lastName });
  const email = faker.internet.email({ firstName, lastName });
  const company = faker.company.name();
  const jobTitle = faker.person.jobTitle();

  return {
    id: uuid,
    profile_picture: profilePicture,
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    company: company,
    job_title: jobTitle,
  };
};

const generateFakeUsers = count => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push(generateFakeUser());
  }
  return users;
};

const users = generateFakeUsers(10);

const jsonData = { users };

fs.writeFileSync('fakeUsers.json', JSON.stringify(jsonData, null, 2));
