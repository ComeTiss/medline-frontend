export function validateNeedForm(need: any) {
  const {
    urgencyLevel,
    itemName,
    specifications,
    budget,
    quantity,
    expireAt
  } = need;

  if (
    budget === "" ||
    urgencyLevel === "" ||
    itemName === "" ||
    specifications === "" ||
    quantity === "" ||
    expireAt === ""
  )
    return true;
  return false;
}

export function validateLeadForm(lead: any) {
  const { availableAt, itemName, quantity, cost } = lead;

  if (availableAt === "" || cost === "" || itemName === "" || quantity === "")
    return true;
  return false;
}

export function mapFormInputToNeedSchema(need: any) {
  return {
    ...need,
    urgencyLevel: Number(need.urgencyLevel)
  };
}

export function mapFormInputToLeadSchema(lead: any) {
  return {
    ...lead
  };
}
