/* page.tsx */

"use client"
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";

export default function Home() {



  return (
    <main className="bg-bg p-20 pt-10">
      <Navbar />
      <div>
        <h1 className="max-w-3xl text-center font-bold text-primary text-5xl leading-tight mb-3">Spill Tea with your people, privately.</h1>
        <p className="text-lg font-medium text-normal text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam corporis officia illum saepe voluptates, assumenda molestiae exercitationem quisquam illo omnis? Fuga, voluptates? Eum dolor ipsam expedita perspiciatis doloremque, ad illo!</p>
        <button className="bg-normal text-primary font-semibold py-2 px-4 rounded-md">Get Started</button>
        <ThemeToggle />
      </div>
    </main >
  );
}