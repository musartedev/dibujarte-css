
import React, {useState} from 'react';
import darkmode from '../assets/darkmode.png';

function DarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	function changeMode() {
		if(darkMode) {
			document.body.classList.add('dark-mode-colors');
		} else {
			document.body.classList.remove('dark-mode-colors');
		}
	}

	return (
		<div onClick={() => {
			setDarkMode(!darkMode);
			changeMode();
		}} className="dark__mode">
			<img className="dark__mode-icon" src={darkmode} />
		</div>
	)
}

export default DarkMode;
