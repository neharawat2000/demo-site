import logo from './logo.svg';
import './App.css';
import Overview from './Page/Overview';
import {Route, Routes } from 'react-router-dom';
import BusinessInformation from './Page/BusinessInformation';
import GuarantorInformation from './Page/GuarantorInformation';
import BusinessDocuments from './Page/BusinessDocuments';

function App() {
  return (
    <Routes>
        <Route path="/application/overview" element={<Overview />} />
        <Route path="/" element={<Overview />} />
        <Route path="/businessInformation" element={<BusinessInformation />} />
        <Route path="/guarantorInformation" element={<GuarantorInformation />} />
        <Route path="/businessDocuments" element={<BusinessDocuments />} />

    </Routes>
  );
}

export default App;
