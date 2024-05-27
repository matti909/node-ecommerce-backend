import { hash, compare } from "bcrypt";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 8);

  return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
  const isDone = await compare(pass, passHash);
  return isDone;
};

export { encrypt, verified };
