import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-lg h-20 flex justify-between items-center px-4 absolute top-0 inset-x-0">
      <Link href="/">
        <a>Header</a>
      </Link>
    </header>
  );
}
