import Header from "../components/Header"
import Main from "../components/Main"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <ToastContainer />
        </>
    )
}

export default Home