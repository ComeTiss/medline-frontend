class Need {
  id: string;
  authorId: number;
  itemName: string;
  specifications: string;
  quantity: number;
  budget: number;
  expireAt: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: any) {
    this.id = props.id;
    this.authorId = props.authorId;
    this.itemName = props.itemName;
    this.specifications = props.specifications;
    this.quantity = props.quantity;
    this.budget = props.budget;
    this.expireAt = props.expireAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}

export default Need;
