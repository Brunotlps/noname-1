import "../styles/global.css";
import Animation from "../components/Animation";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="container">
      <header id="wai">
        <h1>Bruno Teixeira</h1>
        <h2>Software Developer</h2>
      </header>

      <Menu />
      <Animation />

      <section className="projects hidden">
        <ul>
        <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>
                
                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>
                
                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>

                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>

                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>

                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>

                <li>
                    <h3>Project Title</h3>
                    <p>Project description</p>
                </li>
        </ul>
      </section>
    </div>
  );
}