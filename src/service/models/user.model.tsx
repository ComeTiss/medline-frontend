import Organization from "./organization.model";

export class UserInput {
  email: string;
  displayEmail: string;
  civility: string;
  firstName: string;
  functionTitle: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  wechat: string;
  skype: string;
  zoom: string;
  oldPassword: string;
  newPassword: string;

  constructor(props: any) {
    this.email = props.email;
    this.displayEmail = props.displayEmail;
    this.civility = props.civility;
    this.firstName = props.firstName;
    this.functionTitle = props.functionTitle;
    this.lastName = props.lastName;
    this.phoneNumber = props.phoneNumber;
    this.whatsapp = props.whatsapp;
    this.wechat = props.wechat;
    this.skype = props.skype;
    this.zoom = props.zoom;
    this.oldPassword = props.oldPassword;
    this.newPassword = props.newPassword;
  }
}

class User {
  city: string;
  country: string;
  createdAt: Date;
  email: string;
  displayEmail: string;
  civility: string;
  firstName: string;
  functionTitle: string;
  id: number;
  isAdmin: boolean;
  lastName: string;
  organization: Organization;
  updatedAt: Date;
  phoneNumber: string;
  whatsapp: string;
  wechat: string;
  skype: string;
  zoom: string;

  constructor(props: any) {
    this.id = props.id;
    this.city = props.city;
    this.country = props.country;
    this.email = props.email;
    this.displayEmail = props.displayEmail;
    this.civility = props.civility;
    this.firstName = props.firstName;
    this.functionTitle = props.functionTitle;
    this.isAdmin = props.isAdmin;
    this.lastName = props.lastName;
    this.organization = new Organization(props.organization);
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.phoneNumber = props.phoneNumber;
    this.whatsapp = props.whatsapp;
    this.wechat = props.wechat;
    this.skype = props.skype;
    this.zoom = props.zoom;
  }
}

export default User;
