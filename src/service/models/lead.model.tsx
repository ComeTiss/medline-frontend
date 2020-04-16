class Lead {
  id: string;
  authorId: number;
  itemName: string;
  specifications: string;
  quantity: number;
  cost: number;
  availableAt: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: any) {
    this.id = props.id;
    this.authorId = props.authorId;
    this.itemName = props.itemName;
    this.specifications = props.specifications;
    this.quantity = props.quantity;
    this.cost = props.cost;
    this.availableAt = props.availableAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}

export default Lead;
