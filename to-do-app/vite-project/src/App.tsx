import Tasks from './components/Tasks'
import StoreContext from './context/storeContext'
// @ts-ignore
import store from './store/configureStore'

function App() {

  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  )
}

export default App
