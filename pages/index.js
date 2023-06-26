import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="bg-green-950 p-5 text-3xl font-bold text-center">
        <h1>Welcome Esteemed User</h1>
        <p className="p-3 text-lg">
          <Link href="/login">click here to login</Link>
        </p>
      </div>
    </>
  );
}
