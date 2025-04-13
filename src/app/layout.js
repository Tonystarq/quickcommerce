import { Mulish } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import MainWrapper from "@/components/MainWrapper";
import DisclaimerDialog from "@/components/DisclaimerDialog";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Quick Commerce",
  description: "Quick Commerce Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased bg-black`}>
        <ReduxProvider>
          <DisclaimerDialog />
          <MainWrapper>{children}</MainWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
