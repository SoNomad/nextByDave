'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white text-xl rounded-xl p-2 w-50"
        placeholder="Search"
      />
      <button className="bg-slate-300 text-xl rounded-xl p-2 ml-2 font-bold">🚀</button>
    </form>
  );
}
