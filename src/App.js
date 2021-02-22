import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <div className="App">
        <p>Instagram Clone</p>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
