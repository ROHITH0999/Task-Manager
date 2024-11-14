import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import OverdueTasks from './components/OverdueTasks';
import UpcomingTasks from './components/UpcomingTasks';
import Trash from './components/Trash';
import TodayPlan from './components/TodayPlan';
import ThisWeekTasks from './components/ThisWeekTasks';
import Archives from './components/Archives';
import CompletedTasks from './components/CompletedTasks';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path='/' element={<TodayPlan />} />
          <Route path='/overdue' element={<OverdueTasks />} />
          <Route path='/upcomming' element={<UpcomingTasks />} />
          <Route path='/completed' element={<CompletedTasks />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/thisweek' element={<ThisWeekTasks />} />
          <Route path='/archives' element={<Archives />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
