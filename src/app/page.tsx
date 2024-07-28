import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-max px-6 py-2 flex flex-row align-items-center justify-content-between">
      <h1>Dashboard</h1>
      <Link href="/users">
        <ButtonPrimary label="Ir a Usuarios" icon="pi pi-arrow-right" />
      </Link>
    </div>
  );
}
