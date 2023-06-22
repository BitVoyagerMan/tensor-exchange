import Header from './Header'
import { Chart } from '../Chart'
export default function Layout({children, title}){
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}