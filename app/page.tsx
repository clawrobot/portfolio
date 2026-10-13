import Image from "next/image";
import Link from "next/link"

export default function Home(){
  return (
    <div>
      <div className="flex items-center gap-6">
        <Image className="rounded-full" src="/dante.jpg" alt="dante" width={300} height={300}/>
        <p>Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text.</p>
      </div>
      <Link href="/projects" className="inline-block bg-blue-500 hover:bg-blue-700 p-4 m-4 rounded-md text-white">Projects</Link>
    </div>
  );
}