import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>My Name</h1>
        <p>Web Developer & Designer</p>
      </header>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>Hello! I'm learning HTML, CSS, and JavaScript. This is my portfolio site.</p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="#">Project 1</a> – Description of what it does</li>
          <li><a href="#">Project 2</a> – Description of what it does</li>
        </ul>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Email: you@example.com</p>
        <p><a href="https://github.com/yourusername">GitHub</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
