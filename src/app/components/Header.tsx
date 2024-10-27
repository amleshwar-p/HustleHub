import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <div className=" flex  justify-between items-center my-4 mx-auto container">
                <Link href={'/'} className="font-bold text-3xl">
                    Hustle
                    <span className="text-purple-500">Hub</span>
                </Link>
                <nav className="flex gap-2 *:p-2 *:px-4 *:rounded-md">
                    <Link className=" bg-gray-300" href={'/login'}> Login</Link >
                    <Link className="bg-purple-500 text-white" href={'/new-listing'}> Post a Job</Link >
                </nav>
            </div>
        </header>
    );
}