import './App.css'
import Topbar from "./components/topbar/topbar"
import { PlayerDrawer } from './components/PlayerControls'
import Albums from './components/albums/albums'
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <main className="flex-1 overflow-hidden pt-24 pb-28">
        <ScrollArea className="h-full">
          <Albums />
        </ScrollArea>
      </main>
      <PlayerDrawer />
    </div>
  )
}

export default App
