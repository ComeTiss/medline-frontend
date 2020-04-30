import Contacts from "./contacts.model";
import Organization from "./organization.model";
class User {
  city: string;
  contacts?: Contacts;
  country: string;
  createdAt: Date;
  email: string;
  emailDisplay: string;
  civility: string;
  firstName: string;
  functionTitle: string;
  id: number;
  isAdmin: boolean;
  lastName: string;
  organization: Organization;
  updatedAt: Date;

  constructor(props: any) {
    this.id = props.id;
    this.city = props.city;
    this.contacts = new Contacts(props.contacts);
    this.country = props.country;
    this.email = props.email;
    this.emailDisplay = props.emailDisplay;
    this.civility = props.civility;
    this.firstName = props.firstName;
    this.functionTitle = props.functionTitle;
    this.isAdmin = props.isAdmin;
    this.lastName = props.lastName;
    this.organization = new Organization(props.organization);
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}

export default User;
