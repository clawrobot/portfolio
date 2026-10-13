import Link from "next/link"

export default function Header(){
    return (
        <header>
            <nav className="flex gap-6 p-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    );
}