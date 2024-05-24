import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  addMonths,
  subMonths,
} from "date-fns";

type Activity = {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy");
};

function ActivityHours() {
  const employeesData = useAppSelector((store) => store.data.data);
  const activityHours = employeesData.activity_hours;
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const days = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfMonth(lastDayOfMonth),
  });

  const activitiesByDate = activityHours.reduce((acc, activity) => {
    const date = parseISO(activity.date);
    acc[format(date, "yyyy-MM-dd")] = activity;
    return acc;
  }, {} as Record<string, Activity>);

  const handleDayClick = (date: string) => {
    if (activitiesByDate[date]) {
      setSelectedDate(date === selectedDate ? null : date);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="py-3 px-4 bg-white rounded-lg shadow-lg w-80">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevMonth}
          className="p-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-1 text-center text-sm">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const activity = activitiesByDate[dateStr];
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          return isCurrentMonth ? (
            <div
              key={dateStr}
              className={`relative p-0.75 border rounded-lg cursor-pointer hover:bg-gray-100 ${
                activity ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleDayClick(dateStr)}
            >
              <div className="text-xs">{format(day, "d")}</div>
              {activity && (
                <div className="absolute bottom-0.25 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-blue-500 rounded-full"></div>
              )}
              {selectedDate === dateStr && activity && (
                <div className="absolute top-12 left-0 mt-2 w-56 p-2 bg-white border rounded-lg shadow-lg z-10">
                  <div className="text-xs">
                    <strong>Date:</strong> {formatDate(activity.date)}
                    <br />
                    <strong>Exams:</strong> {activity.exams_completed}
                    <br />
                    <strong>Lessons:</strong> {activity.lessons_taken}
                    <br />
                    <strong>Hours:</strong> {activity.hours}h
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div key={dateStr}></div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityHours;
