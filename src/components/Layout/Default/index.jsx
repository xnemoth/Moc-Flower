import Header from '../../header';
import Footer from '../../footer';
import Home from '../../../pages/Home'

function DefaultLayout( { data }) {
    return ( <div>
        <Header />
        <Home>
            { data }
        </Home>
        <Footer />  {/* Footer component */}
    </div> );
}

export default DefaultLayout;