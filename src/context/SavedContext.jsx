import React, { createContext, useState } from "react";

export const SavedContext = createContext();

function SavedProvider({ children }) {
  let initialState = localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : []
    const [saved, setSaved] = useState(initialState)

    function setLocaleSaved(saved){
      localStorage.setItem('saved', JSON.stringify(saved))
      setSaved(saved)
    }

  function addSaved(product) {
    if(saved.some(item => item.id === product.id)){
      setLocaleSaved(saved.filter(item => item.id !== product.id))
    }else{
      setLocaleSaved([...saved, product])
    }
  }

  function isSaved(id){
    return saved.some(item => item.id === id);
  }
  return (
    <SavedContext.Provider value={{ saved,addSaved, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export default SavedProvider;
