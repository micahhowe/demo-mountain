import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 59C */}
      <div id="status" role="alert" aria-live="assertive" class="online">
      <p>You are online.</p>
    </div>
      {/* 54H */}
        <h1><a href="https://www.google.com">lol</a></h1>
      {/* 54J 54E-2 54G 59E	*/}
        <img style={{height:'40px'}} src="http://www.pngmart.com/files/5/Donuts-PNG-File.png" alt="a pink donut" />
        <h2>Not Fixed h2</h2><span className="fixed">Fixed</span>
        <div className="square">
          <button>Click Here</button>
          <p id="absolute">Absolute</p>
        </div>
        {/* 54D-1 */}
        <article>Article</article>
          <section>Section</section>
          <footer>Footer</footer>
        <div className="floating">
        {/* 54C-2 54E-1	 */}
          <p><ul>
            <li>Floating</li>
            <li>List</li>
            </ul></p>
        </div>
        
    </div>
  );
}

export default App;


