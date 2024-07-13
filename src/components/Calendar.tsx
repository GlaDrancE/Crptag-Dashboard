import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { BiLeftArrow } from "react-icons/bi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center py-4 mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-1 border-2 rounded-lg cursor-pointer border-slate-300"
        >
          <ChevronLeft />
        </button>
        <div className="text-lg font-bold uppercase">
          {format(currentMonth, dateFormat)}
        </div>
        <div
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-1 border-2 rounded-lg cursor-pointer border-slate-300"
        >
          <ChevronRight />
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "E";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-sm text-center py-1" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer rounded-full w-8 relative h-8 flex items-center justify-center leading-none ${
              !isSameMonth(day, monthStart)
                ? "text-secondary"
                : isSameDay(day, selectedDate)
                ? "text-primary bg-light-blue"
                : "text-secondary"
            }`}
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div
      style={{ userSelect: "none" }}
      className="bg-white rounded-lg bg-calender p-4"
    >
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
