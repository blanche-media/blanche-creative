/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./../styles/layout.css"

const Layout = ({ children }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
    }
  }

  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
