import { Auth, User } from "../interfaces/auth.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const createNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs!.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "VERIFIED_YOUR_CREDENTIALS";

  const token = generateToken(checkIs.email);

  return {
    token: token,
    user: checkIs,
  };
};

export { createNewUser, loginUser };
