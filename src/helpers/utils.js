export const PREMIUM_STANDARD = 1;
export const PREMIUM_SAFE = 1.5;
export const PREMIUM_SUPER_SAFE = 1.75;

export const getLocationByCurrency = (currency) => {
  let rate = 1;
  let location = "Hong Kong";
  switch (currency) {
    case "USD":
      rate = 2;
      location = "USA";
      break;
    case "AUD":
      rate = 3;
      location = "Australia";
      break;
  }

  return { location, rate };
};

export const getPremiumLabel = (selectedPremium, age, currency) => {
  switch (+selectedPremium) {
    case PREMIUM_SAFE:
      return `Safe (${
        10 * age * 0.5 * getLocationByCurrency(currency).rate
      }${currency}, 50%)`;

    case PREMIUM_SUPER_SAFE:
      return `Super Safe (${
        10 * age * 0.75 * getLocationByCurrency(currency).rate
      }${currency}, 75%)`;

    default:
      return "Standard";
  }
};

export const getPremiumPackage = (selectedPremium) => {
  switch (+selectedPremium) {
    case PREMIUM_SAFE:
      return "Safe";

    case PREMIUM_SUPER_SAFE:
      return "Super Safe";

    default:
      return "Standard";
  }
};
