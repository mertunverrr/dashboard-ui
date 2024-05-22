import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getInfo } from "./redux/fetchApiSlice";

function App() {
  const employeesData = useAppSelector((store) => store.data.data); // Corrected the store path

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInfo());
  }, []);
  useEffect(() => {
    console.log(employeesData);
  }, [employeesData]);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
