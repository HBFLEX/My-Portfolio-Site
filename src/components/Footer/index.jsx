import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			<div className='row text-center'>
				<div className='col-md-8'>
					<p>
						&copy; {new Date().getFullYear()}, Happy Banda.
						<small className={Styles.byline}>developed using Astro + Bootstrap5 + CSS3 + JavaScript + preact + mark-down</small>
					</p>
				</div>
				<div className='col-md-4'>
					<p>
						<a href='https://twitter.com/HB_FL3X'>
							<img className='p-2' src='/assets/twitter.png' width={60} height={60} />
						</a>
						<a href='mailto:hbfl3x@gmail.com'>
							<img className='p-2' src='/assets/gmail.png' width={60} height={60} />
						</a>
						<a href='https://github.com/HBFLEX'>
							<img className='p-2' src='/assets/github.png' width={60} height={60} />
						</a>
						<a href='https://spaceblog.up.railway.app'>
							<img className='p-2' src='/assets/blog.png' width={60} height={60} />
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
