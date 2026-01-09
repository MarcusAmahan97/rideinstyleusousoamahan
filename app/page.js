import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-white rounded-lg shadow">
        <Image
          src="/images/emiljohn.jpg"
          alt="emiljohn"
          width={500}
          height={350}
          className="mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          priority
        />

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome to RIDEINSTYLE
          </h1>
          <p className="mt-4 text-zinc-600">
            A vibrant online page celebrating Davao’s iconic uso-uso jeepneys and guiding commuters to rides worth remembering.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/routesandrides"
            className="flex h-12 items-center justify-center rounded-full bg-black px-6 text-white hover:bg-zinc-800"
          >
            Browse Routes and Rides
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border px-6 hover:bg-zinc-100"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}