"use client";
import ButtonCustom from "../components/ButtonCutom";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl mb-4">Test Komponen Button</h1>
      <ButtonCustom onClick={() => alert("Clicked!")}>Click Me</ButtonCustom>
    </main>
  );
}
