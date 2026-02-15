import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

/* Components */
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PublicLayouts() {
  return (
    <>
      <header>
        <NavBar />
        <div className="h-[150px]"></div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="grow container">
          <Outlet />
        </main>
      </Suspense>
      <footer className="mt-[50px]">
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayouts;
