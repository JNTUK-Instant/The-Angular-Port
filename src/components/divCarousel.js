import Carousel from "../lib/carousel";

function D1() {
  return (
    <div>
      <p>Welcome</p>
      <p>To</p>
      <p>JNTUK-Instant!</p>
    </div>
  );
}

function D2() {
  return (
    <div>
      <p>This Site is Open-Source</p>
      <p>
        Contribute through <a href="https://github.com/JNTUK-Instant">GitHub</a>
      </p>
    </div>
  );
}

function D3() {
  return (
    <div>
      <p>This Website is</p>
      <p>still in</p>
      <p>Beta!!!!</p>
    </div>
  );
}

let TheDivs = [<D1 />, <D2 />, <D3 />];

export default function CarouselDiv() {
  return <Carousel carDiv={TheDivs} />;
}
