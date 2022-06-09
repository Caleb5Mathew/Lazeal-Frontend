import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './login';
import Chart from '../_components/chartdisplay/chart';
import Navbar from '../_components/sidebar/sidebar1';


class LoginPage extends React.Component {
  
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    openNav() {
      document.getElementsByClassName("sidenav").style.width = "250px";
    }
    closeNav() {
      document.getElementsByClassName("sidenav").style.width = "0";
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <React.Fragment>
            <html>
              <div className="headerbackdrop">
                <div className="outerheader">
                  <div className = "headerbackdrop">
                    <img src = "https://i.pinimg.com/originals/ed/25/f1/ed25f1665d17de7dc6e10510cd087314.jpg"className='headerpicture' />
                    <img src = 'https://i.pinimg.com/564x/95/33/5b/95335b9f4f80cb8333fb2b794f1655d4.jpg'
                      className = "logo"
                    />
                      <div className = "outerheaderlogo">
                      </div>
                  </div>
                </div>
              <div>

                </div>
                
                    <div>
                    <Navbar />
                    </div>
      
                    

              </div>
            <div className="backdrop">
            </div>
            
            </html>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};


const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };