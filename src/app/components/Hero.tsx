export default async function Hero() {

    return (
        <>
            <section className=" container my-16">
                <h1 className="text-4xl font-bold text-center">
                    Find your next <br /> dream Job
                </h1>
                <p className="text-center text-gray-700 mt-7">
                    Discover job opportunities that match your skills and passion. Whether you're looking to advance your career or start fresh, your dream job is just a search away.
                </p>
                <form action="" className="flex gap-3 mt-8 max-w-md mx-auto py-2">
                    <input
                        type="search" className="border border-gray-600 w-full py-2 px-3 rounded-md "
                        placeholder="Search phrase..." />
                    <button
                        className="bg-purple-500 text-white py-2 px-4 rounded-md"
                    >Search</button>
                </form>
            </section>
        </>
    );
};
