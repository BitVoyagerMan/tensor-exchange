import Header from './Header'
import { Chart } from '../Chart'
import Footer from './Footer'
export default function Layout({children, title}){
    return (
        <div>
            <Header></Header>
            {children}
            <Footer/>
        </div>
    )
}