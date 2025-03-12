import React from 'react'
import Header from './TheHeader'
import Footer from './TheFooter'

const Layout = ({ children }) => {
    return (
        <>
            <div className="page_wrapper">
                <Header />
                <main className="page">{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
