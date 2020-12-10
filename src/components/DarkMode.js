
import React, {useState} from 'react';
import darkmode from '../assets/moon.svg';
import lightmode from '../assets/sun.svg';


function DarkMode() {
  const [img, setImg] = useState(darkmode);

  const handlerDarkMode = () => {
    const body = document.body
    const isDarkMode = body.classList.contains('dark-mode-colors')
    setImg(
      isDarkMode ? darkmode : lightmode
    )
    body.classList.toggle('dark-mode-colors');
  }

	return (
		<div onClick={handlerDarkMode} className="dark__mode">
			<img className="dark__mode-icon" src={img} alt="dark mode icon" />
		</div>
	)
}

export default DarkMode;
