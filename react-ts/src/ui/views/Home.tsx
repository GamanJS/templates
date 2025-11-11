import React, { useState } from 'react';
import '../styles/home.css';

interface Props {
	title: string;
	stackName: string;
}

const Home: React.FC<Props> = ({ stackName }) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<img src="/icon.png" alt="Gaman Logo" />

			<h1>
				Welcome to <span>{stackName}</span>
			</h1>
			<p>
				Build modern fullstack apps with simplicity —{' '}
				<b>{stackName} × ReactJS</b>
			</p>

			<div className="counter">
				Your counter: <strong>{count}</strong>
			</div>

			<div>
				<button className="increment" onClick={() => setCount(count + 1)}>
					Increment
				</button>
				<button className="reset" onClick={() => setCount(0)}>
					Reset
				</button>
			</div>

			<footer>© {new Date().getFullYear()} {stackName} Framework</footer>
		</div>
	);
};

export default Home;
