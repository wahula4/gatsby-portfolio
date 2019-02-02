import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/wahula4" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/tony-wahula/" className="icon fa-linkedin" target="_blank"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:mawahula4@gmail.com" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
