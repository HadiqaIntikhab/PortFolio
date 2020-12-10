import React,{useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Trail from './Trail'
import { render } from 'react-dom'
function Home() {
    const [open, set] = useState(true)
    

    return (
        <div>
             <Trail open={open} onClick={() => set((state) => !state)}>
      <span>Hadiqa</span>
      <span>Intikhab</span>
       </Trail>
       <br/>
       <h2>REACT DEVELOPER</h2>
       <div id="skill">
           <h1>Skills</h1>
           <p><b>HTML/CSS skills.<br/>
Analytical skills.<br/>
Responsive design skills.<br/>
JavaScript skills.<br/>
Interpersonal skills.<br/>
Testing and debugging skills.<br/>
Back-end basics.<br/>
Search engine optimization</b></p>
             {/* <Trail open={open} onClick={() => set((state) => !state)}>
      
             <span>Skills</span>
       </Trail> */}
       </div>
       
       {/* <p><b>HTML/CSS skills.<br/>
Analytical skills.<br/>
Responsive design skills.<br/>
JavaScript skills.<br/>
Interpersonal skills.<br/>
Testing and debugging skills.<br/>
Back-end basics.<br/>
Search engine optimization</b></p> */}
 <div>
<div id="skill">
             {/* <Trail open={open} onClick={() => set((state) => !state)}>
      
             <span>Qualification</span>
       </Trail> */}
       <h1>Qualification</h1>
       <p><b>Bechelor's in Computer Technology<br/>
       Saylani IT(Web App learner) student </b></p>
       </div>
      
       {/* <ul>
           <b>Inter<br/>
           Graduate in CS</b>
        </ul> */}
        <div id="skill">
             {/* <Trail open={open} onClick={() => set((state) => !state)}>
      
             <span>Certification</span>
       </Trail> */}
       <h1>Certification</h1>
       <p><b>In HTML<br/>
       In CSS<br/>
       In JavaScript<br/>
       In Advance JavaScript<br/>
       In React (continue)<br/>
       In CS basics<br/>
      In Web application development<br/>
      In basic graphics
       </b></p>
       </div>
            {/* <p><b>In web development</b></p> */}
       
        </div>
        </div>
    )
}
render(<Home />, document.getElementById('root'))

export default Home
