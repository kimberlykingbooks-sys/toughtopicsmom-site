export type BookingOption = {
  title: string;
  priceLabel: string;
};

// TODO: real pricing from Kimberly — placeholders for now
export const bookingOptions: BookingOption[] = [
  { title: "Keynote Speaker", priceLabel: "Price TBD" },
  { title: "Workshop / Staff Training", priceLabel: "Price TBD" },
  { title: "Panelist", priceLabel: "Price TBD" },
];
