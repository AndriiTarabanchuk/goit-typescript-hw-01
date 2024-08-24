type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Pick<
  Omit<Form, "errors">,
  "email" | "firstName" | "lastName" | "phone"
>;

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form

const value: Params = {
  email: "string | null",
  firstName: "string | null",
  lastName: "string | null",
  phone: " string | null",
};

export default value;
