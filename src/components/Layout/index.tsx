import Header from './Header'
export default function Layout({children, title}){
    return (
        <div>
            <Header></Header>
            Layout
            {children}
        </div>
    )
}