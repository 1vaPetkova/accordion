import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion className="accordion" data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <div>
      {data.map((q, i) => (
        <AccordionItem
          key={i}
          el={q}
          num={i + 1}
          currentItem={currentItem}
          changeCurrentItem={(ci) => setCurrentItem(ci)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, el, currentItem, changeCurrentItem }) {
  const shouldShow = num === currentItem;

  function handleClick() {
    changeCurrentItem(currentItem !== num ? num : null);
  }

  return (
    <div className={`item ${shouldShow ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{el.title}</p>
      <p className="icon">{shouldShow ? "-" : "+"}</p>
      {shouldShow ? <div className="content-box">{el.text}</div> : <></>}
    </div>
  );
}
