import './App.css'
import Topbar from "./components/topbar/topbar"
import { PlayerDrawer } from './components/PlayerControls'
import Albums from './components/albums/albums'
import { ScrollArea } from "@/components/ui/scroll-area"
import Recommendations from './components/recommendations/recommendations'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <main className="flex-1 overflow-hidden pt-24 pb-28">
        <div className="flex h-full">
          {/* Recommendations sidebar */}
          <div className="hidden lg:block w-[450px] mt-4 border-r border-border bg-background/80 backdrop-blur-sm">
            <Recommendations />
          </div>
          
          {/* Main content */}
          <ScrollArea className="flex-1">
            <Albums />
          </ScrollArea>
        </div>
      </main>
      <PlayerDrawer />
    </div>
  )
}

export default App
