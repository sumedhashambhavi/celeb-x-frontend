import React from 'react';
import './footer.css';
import './image.css';

const Contact = () => {
	return (
		<div class="">
			<div

				style={{
					position: 'fixed',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
					zIndex: '-1',
				}}
			>

			</div>

			<div className="image-left">
				<img className="picture"
					src='../background/img.jpg'

				/>
				<div>
					<p
						style={{
							color: 'white',
							fontSize: '22px',
							textAlign: 'left',
							padding: '4px 8px',
							marginRight: '300px'
						}}>
						My name is Shambhavi Sumedha. I am a 3rd year student pursuing a dual major in Electronics and Electrical Engineering and MSc Chemistry from BITS Pilani Goa Campus. I am a self-motivated, hardworking and a well-organized individual who has a strong desire to learn new things. I am a beginner in software development and have formerly interned at Swecha, Telangana as a software development intern. I have also worked as a volunteer for HelpAge India, a non-profit NGO. I love to read, write poetry, dance and sing. I am a member of my college's Literary and Debate club, dance club and Department of Public Relations and Publicity.

					</p>
				</div>
			</div>


			<footer>
				<div className="rounded-social-buttons">
					<a
						className="social-button github"
						href="https://github.com/sumedhashambhavi"
						target="_blank"
					>
						<img src="../icons/git.svg" />
						<i className="fab fa-github" />
					</a>
					<a
						className="social-button mail"
						href="https://www.twitter.com/"
						target="_blank"
					>
						<img src="../icons/gmail.svg" />
						<i className="fab fa-mail" />
					</a>
					<a
						className="social-button linkedin"
						href="https://www.linkedin.com/in/shambhavi-sumedha/"
						target="_blank"
					>
						<img src="../icons/linkedin.svg" />
						<i className="fab fa-linkedin" />
					</a>
					<a
						className="social-button youtube"
						href="https://www.youtube.com/"
						target="_blank"
					>
						<img src="../icons/youtube.svg" />
						<i className="fab fa-youtube" />
					</a>
					<a
						className="social-button instagram"
						href="https://www.instagram.com/candlelight.myrtle/"
						target="_blank"
					>
						<img src="../icons/insta.svg" />
						<i className="fab fa-instagram" />
					</a>
				</div>
				<p style={{ color: 'white' }}> You can also find me here</p>
			</footer>


		</div >
	);
};

export default Contact;
