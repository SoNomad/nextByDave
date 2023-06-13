import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/profile.jpg"
        alt="Nomad Tasuev"
        width={200}
        height={200}
        className="rounded-full border-4 border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8"
        priority={true}
      />
    </section>
  );
}
