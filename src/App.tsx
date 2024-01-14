import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MachineLearningPage from "./pages/MachineLearningPage"
import GPTQuizPage from "./pages/GPTQuizPage"
import StudentGuidePage from './pages/StudentGuidePage';
import FernPage from './pages/FernPage';
import PageTurnerPage from './pages/PageTurnerPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/website/" element={<HomePage />} />
          <Route path="/website/machine_learning" element={<MachineLearningPage />} />
          <Route path="/website/GPT_quiz" element={<GPTQuizPage />} />
          <Route path="/website/student_guide" element={<StudentGuidePage />} />
          <Route path="/website/Fern" element={<FernPage />} />
          <Route path="/website/Page_Turner" element={<PageTurnerPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

