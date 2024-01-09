import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";
import Right from "./right";

export default function Header() {
	return (
		<header className='header bg-red-500'>
			<div className='wrapper'>
				<div className='logo'>
					<a href='/'>
						<Image className='object-contain' width={50} height={50} src='./assets/images/logo.svg' alt='logo' />
					</a>
				</div>

				<div className='hamburger' data-hamburger>
					<div className='hamburger-wrapper magnetic-item'>
						<div className='hamburger-wrapper__line'>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
