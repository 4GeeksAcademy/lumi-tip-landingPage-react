import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const bars = <FontAwesomeIcon icon={faBars} />

//create your first component


const NavBar = () => {
	return (
		<nav className="navbar bg-dark navbar-expand-lg mb-4">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
				<button className=" navbar-toggler btn-el" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span>{bars}</span>
				</button>
				<div className="collapse navbar-collapse nav-el" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link text-white active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" aria-disabled="true" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" aria-disabled="true" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

const Hero = () => {
	return (
		<header className="ps-5 pe-5 py-5 mb-3 bg-light">
			<h1>A Warm Welcome</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ullam enim doloribus beatae cumque aperiam vitae quae rem architecto est magnam expedita voluptatum dolore, maiores eveniet excepturi sunt quas qui eos praesentium esse. Cum asperiores, vitae ratione illo commodi velit!</p>
			<button className="btn btn-primary">Call To Action</button>
		</header>
	)
}

const Card = (props) => {
	return (
		<div className="card flex-lg-grow-1 mx-1 mb-2">
			<img src={props.imageURL} className="card-img-top" alt="..." />
			<div className="card-body p-3 text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="w-100 p-3 bg-light text-center border-top">
				<a href={props.link} className="btn btn-primary">{props.label}</a>
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<footer className="bg-dark d-flex justify-content-center align-items-center">
			<p className="text-white p-4">Copyright LuMi</p>
		</footer>
	)
}

const Home = () => {

	return (
		<>
			<NavBar />
			<section className="mx-5 mt-2">
				<Hero />
				<div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center">
					<Card title="Beatiful Views" imageURL="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" description="this view is from somewhere" link="#" label="This link goes nowhere" />
					<Card title="Apple Vision Pro" imageURL="https://cdn.vox-cdn.com/thumbor/uy2bBwNrunNkNHI9erF5NLFWzkM=/0x0:2560x1440/1400x1400/filters:focal(1280x720:1281x721)/cdn.vox-cdn.com/uploads/chorus_asset/file/24704143/wwdc_2023_545.jpg" description="Take reality to another level" link="https://www.apple.com/apple-vision-pro/" label="More info" />
					<Card title="Its an Egg" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNfFOGI93VAvWMHQaugi33nsBuV9UE3h0ZA&usqp=CAU" description="Honestly, it is just an egg" link="https://www.instagram.com/world_record_egg/" label="Visit Egg" />
					<Card title="Hey" imageURL="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" description="I'm just filler content " link="#" label="Goes nowhere too" />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;

