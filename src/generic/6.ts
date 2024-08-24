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

type BasicForm = Pick<Form, "email" | "firstName" | "lastName" | "phone">;

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = BasicForm;

const value: Params = {
  email: "string | null",
  firstName: "string | null",
  lastName: "string | null",
  phone: " string | null",
};

console.log("value6", value);
