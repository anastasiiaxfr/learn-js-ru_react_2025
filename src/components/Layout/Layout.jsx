import React from 'react'
import Header from './TheHeader'
import Footer from './TheFooter'
import ProgressBar from './ProgressBar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="page_wrapper">
                <Header />
                <ProgressBar />
                <main className="page">{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
