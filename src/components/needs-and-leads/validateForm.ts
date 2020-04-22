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
    return false;
  return true;
}

export function mapFormInputToNeedSchema(need: any) {
  const {
    urgencyLevel,
    itemName,
    specifications,
    budget,
    quantity,
    expireAt
  } = need;
  return {
    urgencyLevel: Number(urgencyLevel),
    itemName,
    specifications,
    budget,
    quantity,
    expireAt
  };
}
