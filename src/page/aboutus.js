import React from 'react';


const About = () => {
	return (
		<div className='bckg'
			style={{
				backgroundImage: 'url("../bg/bg.jpg")',
				backgroundSize: 'contain',
				backgroundPosition: 'right',
				backgroundRepeat: 'no-repeat',
				display: 'flex',
				flexDirection: 'column',

				height: '100vh',
				width: '100vw',
				zIndex: '-1',
				position: 'fixed',
				textAlign: 'left',

			}}
		>


			<h1
				style={{
					color: 'white',


					padding: '4px 4px',
					fontSize: '70px',
					position: 'left',
					textAlign: 'left',
					marginLeft: '30px',
					marginTop: '50px',
				}}>
				Celeb-X
			</h1>

			<h2
				style={{

					color: 'white',
					padding: '4px 4px',
					marginLeft: '30px',

				}}>
				{'\n'}Scan the face of any celeb and this app will tell you who it is
			</h2>
		</div>
	);
};

export default About;
