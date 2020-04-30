export class OrganizationInput {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  activity: string;

  constructor(props: any) {
    this.id = props.id;
    this.name = props.name;
    this.city = props.city;
    this.country = props.country;
    this.address = props.address;
    this.activity = props.activity;
  }
}

class Organization {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  activity: string;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;

  constructor(props: any) {
    this.id = props.id;
    this.name = props.name;
    this.city = props.city;
    this.country = props.country;
    this.address = props.address;
    this.activity = props.activity;
    this.verifiedAt = props.verifiedAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}

export default Organization;
