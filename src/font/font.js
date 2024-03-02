import { Inter, Poppins, Montserrat } from "next/font/google";

export const montserrat = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--mons-font",
});
