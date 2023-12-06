import todoIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import reminderIcon from "../assets/icon-reminders.svg";
import planningIcon from "../assets/icon-planning.svg";

export const navLinks = [
  { id: 1, title: "Features", hasDropdown: true },
  { id: 2, title: "Company", hasDropdown: true },
  { id: 3, title: "Careers", hasDropdown: false },
  { id: 4, title: "About", hasDropdown: false },
];

export const featuresSubLinks = [
  { id: 1, icon: todoIcon, title: "Todo List" },
  { id: 2, icon: calendarIcon, title: "Calendar" },
  { id: 3, icon: reminderIcon, title: "Reminders" },
  { id: 4, icon: planningIcon, title: "Planning" },
];

export const companySubLinks = ["History", "Our Team", "Blog"];
