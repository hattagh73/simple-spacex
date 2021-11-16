import React from 'react';
import {ReactComponent as SearchIcon} from '../icons/iconsearch.svg';

const Header = () => {
	return (
		<header className="header_parent">
			<div className="header_child centering_container">
				<div className="header_title">
					<h1 style={{color: "#fafafa"}}>Space<span style={{color: "#069C54"}}>X</span></h1>
				</div>
				<div className="search_container">
					<SearchIcon className="icon_search" />
					<input 
						className="search_bar"
						type="text"
						placeholder="Search"
					/>
				</div>
			</div>
		</header>
	)
}

export default Header;