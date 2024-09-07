import { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }
  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-end items-end gap-4'>
        <ThemeBtn />
        <Card />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
