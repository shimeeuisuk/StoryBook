import styled from "styled-components";
import { useState } from "react";

export default function Calendar({
  back,
  front,
  yearsize,
  yearcolor,
  monthsize,
  monthcolor,
  dayswidth,
  daysheight,
  daysshadowcolor,
  daysfontsize,
  daysbackground,
  daysborderradius,
  datewidth,
  datebackground,
  dateheight,
  datefontsize,
}) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const [month, setMonth] = useState(currentDate.getMonth());

  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);

  const frontEmpties = firstDate.getDay();
  const items = lastDate.getDate();
  const lastEmpties = 7 - ((frontEmpties + items) % 7);

  const dateItems = [
    ...new Array(frontEmpties),
    ...new Array(items).fill(0).map((_, i) => `${(i + 1).toString()}`),
    ...new Array(lastEmpties),
  ];

  const monthItems = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <>
      <Year yearsize={yearsize} yearcolor={yearcolor}>
        {firstDate.getFullYear()}
      </Year>
      <Month monthsize={monthsize} monthcolor={monthcolor}>
        {monthItems[firstDate.getMonth()]}
      </Month>
      <Buttons>
        <span
          className="back"
          onClick={() => {
            setMonth(month - 1);
          }}
        >
          {back || "<"}
        </span>
        <span
          className="front"
          onClick={() => {
            setMonth(month + 1);
          }}
        >
          {front || ">"}
        </span>
      </Buttons>
      <Days
        dayswidth={dayswidth}
        daysheight={daysheight}
        daysshadowcolor={daysshadowcolor}
        daysfontsize={daysfontsize}
        daysbackground={daysbackground}
        daysborderradius={daysborderradius}
      >
        <span>sun</span>
        <span>mon</span>
        <span>tue</span>
        <span>wed</span>
        <span>thu</span>
        <span>fri</span>
        <span>sat</span>
      </Days>
      <DateContainer
        datewidth={datewidth}
        datebackground={datebackground}
        dateheight={dateheight}
        datefontsize={datefontsize}
      >
        {dateItems.map((el, i) => {
          return (
            <div className="date" key={i}>
              {el ? el : " "}
            </div>
          );
        })}
      </DateContainer>
    </>
  );
}

const Year = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: ${(props) => props.yearsize || "30"}px;
  color: ${(props) => props.yearcolor || "#000000"};
`;
const Month = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-weight: bold;
  color: ${(props) => props.monthcolor || "#62afc8"};
  font-size: ${(props) => props.monthsize || "60"}px;
`;
const Buttons = styled.div`
  .back {
    font-family: "Nanum Myeongjo", serif;
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
  .front {
    font-family: "Nanum Myeongjo", serif;
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
`;
const Days = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: ${(props) => props.daysfontsize || "20"}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.daysbackground || "#FFFFFF"};
  width: ${(props) => props.dayswidth || "1204"}px;
  height: ${(props) => props.daysheight || "62"}px;
  box-shadow: 0px 3px 10px ${(props) => props.daysshadowcolor || "#808080"};
  border-radius: ${(props) => props.daysborderradius || "0.5"}rem;
`;
const DateContainer = styled.div`
  width: ${(props) => props.datewidth || "1204"}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: ${(props) => props.datebackground || "#FFFFFF"};
  box-shadow: 0px 3px 10px gray;
  border-radius: 0.5rem;
  .date {
    font-family: "Nanum Myeongjo", serif;
    font-size: ${(props) => props.datefontsize || "13"}px;
    display: flex;
    height: ${(props) => props.dateheight || "172"}px;
    border: 1px solid lightgray;
  }
`;
