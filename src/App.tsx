import Header from './components/Header'
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toogleTheme}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
