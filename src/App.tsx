import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MachineLearningPage from "./pages/MachineLearningPage"
import GPTQuizPage from "./pages/GPTQuizPage"
import StudentGuidePage from './pages/StudentGuidePage';
import FernPage from './pages/FernPage';
import PageTurnerPage from './pages/PageTurnerPage';

function App() {
  return (
    <Router basename='/'> {/* No need for /website/ here, the base in vite.config.js handles this */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/machine_learning" element={<MachineLearningPage />} />
          <Route path="/GPT_quiz" element={<GPTQuizPage />} />
          <Route path="/student_guide" element={<StudentGuidePage />} />
          <Route path="/Fern" element={<FernPage />} />
          <Route path="/Page_Turner" element={<PageTurnerPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

