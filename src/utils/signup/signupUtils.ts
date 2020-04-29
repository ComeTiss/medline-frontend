const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 30;

export default {
  isStrContainingSpecialCharacter(string: string) {
    const regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return string.search(regex) !== -1;
  },
  isStrContainingCapitalLetter(string: string) {
    const regex = /[A-Z]/g;
    return string.search(regex) !== -1;
  },
  isStrContainingNumber(string: string) {
    const regex = /[0-9]/g;
    return string.search(regex) !== -1;
  },
  helperTextPassword(password: string) {
    if (password.length <= PASSWORD_MIN_LENGTH)
      return "Password must have more than 8 characters";
    if (password.length >= PASSWORD_MAX_LENGTH)
      return "Password must have less than 30 characters";
    if (!this.isStrContainingSpecialCharacter(password))
      return "Password must contain at least one special character";
    if (!this.isStrContainingCapitalLetter(password))
      return "Password must contain at least one uppercase character";
    if (!this.isStrContainingNumber(password))
      return "Password must contain at least one number";
    return "";
  }
};

export type SignupInputDataType = {
  email: string;
  password: string;
  address: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  country: string;
  city: string;
  functionTitle: string;
  activity: string;
  civility: string;
};
