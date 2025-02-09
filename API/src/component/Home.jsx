import React, { useEffect, useState } from "react";

const QuizQuestion = () => {
    const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) {
                    throw new Error("Failed to fetch user data.");
                }
                const jsonResponse = await res.json();
                setData(jsonResponse.results[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApiData();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-6">
            {loading ? (
                <p className="text-xl font-medium text-gray-600 animate-pulse">Loading...</p>
            ) : error ? (
                <p className="text-lg text-red-600">{error}</p>
            ) : (
                <div className="shadow-xl rounded-2xl border-2 border-gray-500 p-8 flex flex-col sm:flex-row w-full max-w-4xl bg-white hover:shadow-2xl transition-shadow duration-300">
                    {/* Image Section */}
                    <div className="w-38 h-38 sm:w-40 sm:h-40 lg:w-56 lg:h-56 border-2 border-gray-400 rounded-xl overflow-hidden flex justify-center items-center">
                        <img
                            src={data.picture.large}
                            alt={`${data.name.first} ${data.name.last}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/*Information Section */}
                    <div className="mt-6 sm:mt-0 sm:ml-9 flex flex-col justify-between space-y-2">
                        <div className="text-gray-700 space-y-2">
                            <p className="text-lg mb-4">
                                <span className="font-semibold">Name:</span> <span>{`${data.name.title} ${data.name.first} ${data.name.last}`}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Gender:</span> {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Phone:</span> <span className="cursor-pointer hover:text-gray-900">{data.phone}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Email:</span> <span className="cursor-pointer hover:text-gray-900">{data.email}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Location:</span> {`${data.location.city}, ${data.location.state}, ${data.location.country}`}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizQuestion;