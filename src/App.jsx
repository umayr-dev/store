import { useState } from "react"
import AuthModal from "./components/AuthModal"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  function onAuthModalOpen(){
    setAuthModalOpen(true)
  }
  function onAuthModalClose(){
    setAuthModalOpen(false)
  }
  return (
    <>
      <Header onAuthModalOpen={onAuthModalOpen} />
      <Main />
      
      <Footer />
      <AuthModal open={authModalOpen} onClose={onAuthModalClose}/>
    </>
  )
}

export default App
