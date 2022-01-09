import React from 'react';
import { Link } from "react-scroll";

export default class Header extends React.Component {
	render() {
		return (
			<div className="nav">
				<ul>
					<li className="nav-item">
						<Link
						activeClass="active"
						to="link"
						spy={true}
						smooth={true}
						duration={500}
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
						duration={500}
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
						duration={500}
						>
							Qualification
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}