"use client";

import "./globals.css";
import { useState, useEffect } from 'react';
import MaintenancePage from './maintenance/page';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";

// import { Providers } from "./redux/provider/provider";

export default function RootLayout({ children }) {
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    // Decide maintenance flag here
    setShowMaintenance(true);
  }, []);

  // if (showMaintenance) {
  //   return (
  //     <html lang="en">
  //       <body className="bg-black">
  //         <MaintenancePage />
  //       </body>
  //     </html>
  //   );
  // }


  return (
    <html lang="en">
    <body
      // className={${geistSans.variable} ${geistMono.variable} antialiased}
    >
      {/* <Providers> */}
        <Navbar />
        <Whatsapp />
        {/* <FormPopup /> */}
        {children}
        {/* <Footer /> */}
        {/* </Providers> */}
    </body>
  </html>
  );
}