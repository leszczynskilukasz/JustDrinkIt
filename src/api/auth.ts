import auth from '@react-native-firebase/auth';
import { loginErrors } from './consts/errorCodes';
import names from '../utils/names';

export const loginUser = async (
  email: string,
  password: string,
  setTextError: (error: string) => void,
  setLoading: (loading: boolean) => void,
): Promise<void> => {
  if (email.trim() === '' || password.trim() === '') {
    setTextError(names.Auth['Please enter email and password']);
    setLoading(false);
  } else {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setLoading(false);
        let errorMessage = '';
        switch (error.code) {
          case loginErrors.INVALID_EMAIL:
          case loginErrors.WRONG_PASSWORD:
          case loginErrors.USER_NOT_FOUND: {
            errorMessage = names.Auth['Incorrect email or password'];
            break;
          }
          case loginErrors.USER_DISABLED: {
            errorMessage = names.Auth['Account has been blocked'];
            break;
          }
          default:
            errorMessage = names.Auth['Something went wrong. Please try again later'];
        }
        setTextError(errorMessage);
      });
  }
};

export const logoutUser = (): Promise<void> => auth().signOut();
