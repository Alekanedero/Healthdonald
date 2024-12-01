import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mb-auto flex items-center gap-2 border-t p-4">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonals.png"
          alt="Healthdonals"
          width={32}
          height={32}
        />
        <p className="text-sm font-bold">Healthdonald</p>
      </Link>
      <div className="ml-auto" />
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Healthdonald. All rights reserved.
      </p>
    </footer>
  );
};
