import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";


export default async function Header() {
    const { user } = await withAuth();
    const signInUrl = await getSignInUrl();


    return (
        <header >

            <div className=" flex  justify-between items-center my-4 mx-auto container">
                <Link href={'/'} className="font-bold text-3xl">
                    Hustle
                    <span className="text-purple-500">Hub</span>
                </Link>
                <nav className="flex gap-2 ">
                    {!user && (
                        <Link className=" bg-gray-300 rounded-md py-2 px-4" href={signInUrl}> Login</Link >
                    )}
                    {user && (
                        <form action={
                            async () => {
                                'use server';
                                await signOut();
                            }
                        }>
                            <button type="submit" className="bg-gray-300 rounded-md py-2 px-4" >Logout</button >
                        </form>

                    )}
                    <Link className="bg-purple-500 bg-gray-300 rounded-md py-2 px-4 text-white" href={'/new-listing'}> Post a Job</Link >
                </nav>
            </div>
        </header>
    );
}