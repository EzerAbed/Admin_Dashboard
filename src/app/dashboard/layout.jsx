import NavbarComponent from "../UI/dashboard/navbar/navbar";
import SidebarComponent from "../UI/dashboard/sidebar/sidebar";
import styles from "../UI/dashboard/dashboard.module.css"

const Layout = ({children}) => {
    return(
        <div className= {styles.container} >
            <div className= {styles.menu}>
                <SidebarComponent />
            </div>

            <div className= {styles.content}>
                <NavbarComponent />
                {children}
            </div>
        </div>
    )
}

export default Layout;