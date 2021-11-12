import additionalCost from "../additionalCost/additionalCost";

const totalWithPlan = (minuteCost, totalMinutes, valuePlan) => {
  let totalCost = 0;

  if (valuePlan === 30) {
    if (totalMinutes <= 30) {
      totalCost = 0;
    } else {
      totalCost = (totalMinutes - 30) * additionalCost(minuteCost);
    }
  }

  if (valuePlan === 60) {
    if (totalMinutes <= 60) {
      totalCost = 0;
    } else {
      totalCost = (totalMinutes - 60) * additionalCost(minuteCost);
    }
  }

  if (valuePlan === 120) {
    if (totalMinutes <= 120) {
      totalCost = 0;
    } else {
      totalCost = (totalMinutes - 120) * additionalCost(minuteCost);
    }
  }

  return totalCost;
};
export default totalWithPlan;
