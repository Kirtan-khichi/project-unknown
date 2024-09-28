import './App.css';
import UncontrolledExample from './assets/Component/carousels';
import CustomNavbar from './assets/Component/navbar';
import Header from './assets/Component/firstPage';
import WebDesignerPortfolio from './assets/Component/secondPage';
import GroupExample from './assets/Component/cards';
import FAQs from './assets/Component/faqs';
import Footer from './assets/Component/aboveFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaintextExample from './assets/Pages/contact';

function App() {
  return (
    <Router>
        <CustomNavbar />
      <Routes>
        <Route path="/contact" element={<PlaintextExample />} />
        <Route path="/" element={
          <>
            <Header />
            <WebDesignerPortfolio />
            <GroupExample />
            <UncontrolledExample />
            <FAQs />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
