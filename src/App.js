import logo from "./logo.svg";
import "./App.css";
import { Accordion1 } from "./stories/Accordion";
import { DatePickerInput } from "./stories/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";

function App() {
  const [date, setDate] = useState(dayjs());
  const data = [
    {
      title: "Lorem Ipsum 1",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      title: "Lorem Ipsum 2",
      details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Lorem Ipsum 3",
      details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <div className="App">
      <Accordion1 data={data} size={'small'} />
      <br />
      <DatePickerInput date={date} onChange={(d)=> setDate(d)} />
    </div>
  );
}

export default App;
