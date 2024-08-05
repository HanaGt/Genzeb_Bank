import React from "react";
import Sidebar from "../../components/Sidebar";
import Image from 'next/image'; // Assuming you are using next/image
import MobileNav from "../../components/MobileNav";
// import MobileNav from "../../components/mobileNav"; // Assuming you have this component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Hana' , lastName: 'Guta'}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
            src="/icons/logo.svg" width={30} height={30} alt="Menu" 
            />
          </div>
          <div>
          <MobileNav user={loggedIn} />
          </div>
          {children}
        </div>
    </main>
  );
}