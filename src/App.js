
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Pages/Home/Todo';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import CompletedTasks from './Pages/Home/CompletedTasks';
import Calendar from './Pages/Home/Calendar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completedTasks" element={<CompletedTasks />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
