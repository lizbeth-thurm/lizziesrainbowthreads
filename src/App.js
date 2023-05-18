import logo from "./LOGO.jpg";
import "./App.css";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

// header component
function Header() {
  const scrollDirection = useScrollDirection();
  
  return (
    <div className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
      <div>Disappearing Header</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<p>ABOUT</p>
<p>LINKS</p>
<p>CONTACT</p>
      </header>
      <body className="App-body">
        <p>Welcome to my site</p>
      </body>
    </div>
  );
}

export default App;
