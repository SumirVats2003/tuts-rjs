import { useState } from 'react'
import './App.css'

// let grievance;

// const btn1 = document.getElementsByClassName('btn')[0]

// btn1.addEventListener('click', btnClick());

// const btnClick = () => {
// 	grievance = ``;
// 	grievance = grv.value;
// 	grv.value = ``;
// }

console.log(grievance);

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
		<nav className="navbar">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Team</a></li>
			</ul>
		</nav>
		<div className="main">
			<img src="/src/logo.png" alt="logo"/>
			<p id="para">
				Online Grievances Redressal System
			</p>
			<textarea name="grievance" id="grv" cols="90" rows="1" placeholder='Enter grievance'></textarea>
			<button className="btn">Submit Grievance</button>
		</div>
	</>
  )
}

export default App
