import { useState } from "react"
import AuthModal from "./components/AuthModal"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Chat from "./components/Chat"
function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  function onAuthModalOpen(){
    setAuthModalOpen(true)
  }
  function onAuthModalClose(){
    setAuthModalOpen(false)
  }

  function onChatModalOpen(){
    setChatModalOpen(true)
  }
  function onChatModalClose(){
    setChatModalOpen(false)
  }
  return (
    <>
      <Header onAuthModalOpen={onAuthModalOpen} onChatModalOpen={onChatModalOpen} />
      <Main />
      
      <Footer />
      <AuthModal open={authModalOpen} onClose={onAuthModalClose}/>
      <Chat openChat={chatModalOpen} onCloseChat={onChatModalClose}/>
    </>
  )
}

export default App
