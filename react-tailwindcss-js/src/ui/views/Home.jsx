import React, { useState } from 'react';

const Home = ({ stackName }) => {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-white text-gray-800">
			<img
				src="/icon.png"
				alt="GamanJS Logo"
				className="w-32 h-32 mb-6 drop-shadow-md animate-pulse"
			/>

			<h1 className="text-4xl font-bold mb-2 text-center">
				Welcome to <span className="text-pink-500">{stackName}</span>
			</h1>
			<p className="text-gray-500 mb-8 text-center max-w-md">
				Build modern fullstack apps with simplicity —{' '}
				<b>{stackName} × ReactJS × TailwindCSS</b>
			</p>

			<div className="flex flex-col items-center">
				<p className="text-lg mb-3">
					Your counter:{' '}
					<span className="font-semibold text-pink-500">{count}</span>
				</p>
				<div className="flex gap-3">
					<button
						onClick={() => setCount(count + 1)}
						className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
					>
						Increment
					</button>
					<button
						onClick={() => setCount(0)}
						className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
					>
						Reset
					</button>
				</div>
			</div>

			<footer className="mt-12 text-sm text-gray-400">
				© {new Date().getFullYear()} {stackName} Framework
			</footer>
		</div>
	);
};

export default Home;
