import Content from "./MainPage/Content.jsx";
import LazyLoadedDiv from "./MainPage/LazyLoadedDiv.jsx";

function App() {
  return (
    <LazyLoadedDiv>
      <section className="bg-[#232E42]">
        <section>
          <Content />
        </section>
      </section>
    </LazyLoadedDiv>
  );
}

export default App;
