import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IEmployeeType {
  data: Data;
}

export interface Data {
  activity_hours: ActivityHour[];
  average_employee_score: string;
  in_progress_courses: InProgressCourse[];
  skills_in_development: SkillsInDevelopment[];
  teams: Team[];
  top_employees: TopEmployee[];
  top_skills: TopSkill[];
  total_completed_courses: number;
  total_employees: number;
  upcoming_courses: UpcomingCourse[];
}

export interface ActivityHour {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
}

export interface InProgressCourse {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

export interface SkillsInDevelopment {
  employees: number;
  skill: string;
}

export interface Team {
  description: string;
  employees: Employee[];
  overall_score: string;
  title: string;
  total_employee_count: number;
}

export interface Employee {
  current_score: number;
  email: string;
  lessons_taken: number;
  name: string;
  skills_being_developed: string[];
  title: string;
}

export interface TopEmployee {
  current_score: number;
  email: string;
  name: string;
  title: string;
}

export interface TopSkill {
  employees: number;
  skill: string;
}

export interface UpcomingCourse {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

export const getInfo = createAsyncThunk<IEmployeeType, void>(
  "employees",
  async () => {
    const response = await axios.get<IEmployeeType>(
      "https://demotrainiq.com/case/dashboard"
    );
    return response.data;
  }
);

const initialState: IEmployeeType = {
  data: {
    activity_hours: [],
    average_employee_score: "",
    in_progress_courses: [],
    skills_in_development: [],
    teams: [],
    top_employees: [],
    top_skills: [],
    total_completed_courses: 0,
    total_employees: 0,
    upcoming_courses: [],
  },
};

export const fetchApiSlice = createSlice({
  name: "fetchApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getInfo.fulfilled,
      (state, action: PayloadAction<IEmployeeType>) => {
        state.data = action.payload.data;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {} = fetchApiSlice.actions;

export default fetchApiSlice.reducer;
