
import React, {useState} from 'react';
import darkmode from '../assets/darkmode.png';
import lightmode from '../assets/light.png';


function DarkMode() {
	const [darkMode, setDarkMode] = useState(false);
  const [img, setImg] = useState(darkmode);

	function changeMode() {
		if(darkMode) {
			document.body.classList.add('dark-mode-colors');
      setImg(lightmode);
		} else {
			document.body.classList.remove('dark-mode-colors');
      setImg(darkmode);
		}
	}

	return (
		<div onClick={() => {
			setDarkMode(!darkMode);
			changeMode();
		}} className="dark__mode">
			<img className="dark__mode-icon" src={img} alt="dark mode icon" />
		</div>
	)
}

export default DarkMode;
