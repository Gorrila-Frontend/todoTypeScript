import* as React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import { Button } from 'reactstrap'; 
import createBrowserHistory from 'history/createBrowserHistory';
import '../index.css'
import LeftSlide from './leftSide';

const history = createBrowserHistory();

class Home extends React.Component {
  render () {
    return (
      <div>
          <ul
            style={{
              position: 'absolute',
              top: '0',
              left: '100px'
            }}
            className="menu_list">
              <li>
                <Button
                  outline={true}
                  color='success'    
                >
                  <Link 
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                    to="/login">
                  Log IN
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  outline={true}
                  color='success'    
                  
                >
                  <Link 
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                    to="/app">
                    Go To Free Version
                  </Link>
                </Button>
              </li>
          </ul>
          <div className="sliderHome">
            <img className="imgOnlySlyder imgOne"src="" alt=""/>
            <img className="imgOnlySlyder imgTwo"src="" alt=""/>
            <img className="imgOnlySlyder imgThree"src="" alt=""/>
            <img className="imgOnlySlyder imgFourth"src="" alt=""/>
            <img className="imgOnlySlyder imgFive"src="" alt=""/>
          
          </div>          
      </div>
    )
  }   
}
export default Home;