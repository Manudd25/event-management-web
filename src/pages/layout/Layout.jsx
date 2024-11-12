/* eslint-disable react/prop-types */
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props) {
    return(
        <div className={classes.background}>
         <MainNavigation />
         <main className={classes.main}>
        {props.children}
         </main>
        </div>
    )

}

export default Layout;