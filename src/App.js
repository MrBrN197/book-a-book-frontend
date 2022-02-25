import './index.css';
import Navbar from './components/Navbar';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <Navbar />
    <main>
      <p>* main content here *</p>
    </main>
  </div>
);

export default App;
