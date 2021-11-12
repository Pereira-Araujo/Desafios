
import GlobalState from './global/GlobalState'
import SinglePage from './SinglePage/index'

const App = () => {
    return (
        <GlobalState>
            <SinglePage />
        </GlobalState>
    )
}
export default App;
