import React from 'react';
import { Element } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default class Content extends React.Component {
	render() {
		const iconSize = 70;
		return (
			<div>
				<div>
					<Element name="link" className="section-content-1">
						<div className="section-content-icon-block">
							<a href="https://github.com/" target="_blank" className="section-content-icon">
								<AiFillGithub size={iconSize} />
							</a>
						</div>
						<div className="section-content-icon-block">
							<a href="https://www.linkedin.com/" target="_blank" className="section-content-icon">
								<AiFillLinkedin size={iconSize} />
							</a>
						</div>
						<div className="section-content-icon-block">
							<a href="https://twitter.com/" target="_blank" className="section-content-icon">
								<AiFillTwitterCircle size={iconSize} />
							</a>
						</div>
					</Element>
					<Element name="career" className="section-content-2">
						403 Forbidden
					</Element>
					<Element name="qualification" className="section-content-3">
						403 Forbidden
					</Element>
				</div>
			</div>
		);
	}
}