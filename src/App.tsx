import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MachineLearningPage from "./pages/MachineLearningPage"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/machine_learning" element={<MachineLearningPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

