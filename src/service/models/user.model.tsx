class User {
  city: string;
  contactID?: number;
  contactType?: string;
  country: string;
  createdAt: Date;
  email: string;
  firstName: string;
  functionTitle: string;
  id: number;
  isAdmin: boolean;
  lastName: string;
  organizationId: number;
  updatedAt: Date;

  constructor(props: any) {
    this.id = props.id;
    this.city = props.city;
    this.contactID = props.contactID;
    this.country = props.country;
    this.email = props.email;
    this.firstName = props.firstName;
    this.functionTitle = props.functionTitle;
    this.isAdmin = props.isAdmin;
    this.lastName = props.lastName;
    this.organizationId = props.organizationId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}

export default User;
