import React from 'react';
import { Link } from "react-scroll";

export default class Header extends React.Component {
	render() {
		const duration = 500;
		return (
			<div className="nav">
				<ul>
					<li className="nav-item">
						<Link
						activeClass="active"
						to="link"
						spy={true}
						smooth={true}
						duration={duration}
						>
							Link
						</Link>
					</li>
					<li className="nav-item">
						<Link
						activeClass="active"
						to="career"
						spy={true}
						smooth={true}
						duration={duration}
						>
							Career
						</Link>
					</li>
					<li className="nav-item">
						<Link
						activeClass="active"
						to="qualification"
						spy={true}
						smooth={true}
						duration={duration}
						>
							Qualification
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}