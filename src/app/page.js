'use client';

import { Fragment, useLayoutEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Home() {
	const { width, height } = useWindowSize();
	const [rendered, setRendered] = useState(false);

	useLayoutEffect(() => {
		setRendered(() => true);
	}, []);

	console.log(rendered);

	return (
		<Fragment>
			{rendered && (
				<Confetti
					width={width}
					height={height}
					recycle={false}
					gravity={0.3}
					initialVelocityY={30}
					initialVelocityX={10}
					tweenDuration={750}
					confettiSource={{ x: width * 0.5, y: height, width: 300, height: 0 }}
				/>
			)}
			

			<div className='flex flex-col items-center justify-center w-screen h-screen gap-4 bg-slate-900'>
				<span className='text-lg text-slate-400'>Is Patrick zijn laptop droog?</span>
				<span className='text-5xl font-medium text-white'>Ja! 🎉</span>
			</div>
		</Fragment>
	);
}
