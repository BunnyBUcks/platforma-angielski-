import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import DogGuide from './components/DogGuide'
import ErrorBoundary from './components/ErrorBoundary'
import ConnectionStatus from './components/ConnectionStatus'
import { ProgressProvider } from './contexts/ProgressContext'
import Home from './pages/Home'
import About from './pages/About'
import LanguageBenefits from './pages/LanguageBenefits'
import IndividualApproach from './pages/IndividualApproach'
import AutorskieMateriały from './pages/AutorskieMateriały'
import PlatformaOnline from './pages/PlatformaOnline'
import EdukacyjneGry from './pages/EdukacyjneGry'
import TestMlodych from './pages/TestMlodych'
import TestDoroslych from './pages/TestDoroslych'
import KursA1 from './pages/KursA1'
import KursA2 from './pages/KursA2'
import KursB1 from './pages/KursB1'
import KursB2 from './pages/KursB2'
import EgzaminOsmoklasisty from './pages/EgzaminOsmoklasisty'
import MaturaPodstawowa from './pages/MaturaPodstawowa'
import MaturaRozszerzona from './pages/MaturaRozszerzona'
import BusinessEnglish from './pages/BusinessEnglish'
import BusinessEnglishC1 from './pages/BusinessEnglishC1'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import TutorDashboard from './pages/TutorDashboard'
import AdminPanel from './pages/AdminPanel'
import Shop from './pages/Shop'
import Lessons from './pages/Lessons'
import CourseViewer from './pages/CourseViewer'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Ładowanie...</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <ProgressProvider>
        <Router>
          <div className="app">
            <ConnectionStatus />
            <Navbar user={user} />
            <DogGuide />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/co-daje-nauka" element={<LanguageBenefits />} />
              <Route path="/indywidualne-podejscie" element={<IndividualApproach />} />
              <Route path="/autorskie-materialy" element={<AutorskieMateriały />} />
              <Route path="/platforma-online" element={<PlatformaOnline />} />
              <Route path="/edukacyjne-gry" element={<EdukacyjneGry />} />
              <Route path="/test-mlodych" element={<TestMlodych />} />
              <Route path="/test-doroslych" element={<TestDoroslych />} />
              <Route path="/kurs-a1" element={<KursA1 />} />
              <Route path="/kurs-a2" element={<KursA2 />} />
              <Route path="/kurs-b1" element={<KursB1 />} />
              <Route path="/kurs-b2" element={<KursB2 />} />
              <Route path="/egzamin-osmoklasisty" element={<EgzaminOsmoklasisty />} />
              <Route path="/matura-podstawowa" element={<MaturaPodstawowa />} />
              <Route path="/matura-rozszerzona" element={<MaturaRozszerzona />} />
              <Route path="/business-english" element={<BusinessEnglish />} />
              <Route path="/business-english-c1" element={<BusinessEnglishC1 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={user ? <StudentDashboard user={user} /> : <Login />} />
              <Route path="/admin" element={user ? <AdminPanel /> : <Login />} />
              <Route path="/tutor" element={user ? <TutorDashboard user={user} /> : <Login />} />
              <Route path="/shop" element={<Shop user={user} />} />
              <Route path="/lessons" element={user ? <Lessons user={user} /> : <Login />} />
              <Route path="/course/:courseId" element={<CourseViewer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ProgressProvider>
    </ErrorBoundary>
  )
}

export default App
