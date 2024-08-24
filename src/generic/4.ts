type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(
  initialValues: T & Partial<User>
) {
  if (Object.keys(initialValues).length === 0) {
    throw new Error("At least one field must be provided.");
  }

  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export default createOrUpdateUser;
