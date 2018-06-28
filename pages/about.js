import Head from 'next/head';
import {Motion, spring} from 'react-motion';
import posed from "react-pose";
//components
import Layout from '../components/layout';


const CreateAbout = (props) => {
  const component = new React.Component(props);
  component.state = {
    subject: "My name is Sam Groot.",
    body: "I use creative solutions to solve expensive problems.",
    valuePitch: "I’m a software developer and entrepreneur who helps startups turn their ideas into a minimum viable product.",
    loadHobbyStatement: false,
  };
  


  component.handleChange = (event) => {
    component.setState({[event.target.name]: event.target.value});
  }

  component.componentDidMount = function() {
    setTimeout(() => {
      component.setState({loadHobbyStatement: true })
    }, 800 );
  }

  //I should make this a component since i'm using it in /about.js
  const ContentAnimation = posed.div({
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      //take 300ms to go from opacity: 0 to 1
      duration: 300
    }
  });

  const About = (props) => (
    <div className='root'>
      <Layout title='About Sam'>
        <div className='content'>
          <div className='target-div'> 
            I like JavaScript.
          </div> <br /> 
          <ContentAnimation
            pose={ component.state.loadHobbyStatement
              ? "visible" 
              : "hidden" 
          }>
            I also enjoy a good craft beer and a bike ride.
          </ContentAnimation>
        </div>
      </Layout>
      
      <style jsx>{`
      div {
        font: 23px Times, Arial, sans-serif;
      };
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        text-align: center;
        padding-top: 50px;
        max-width: 600px;
      };
      .target-div {
        text-align: center;
        font: 35px Helvetica, Arial, sans-serif;
      };
      `}</style>
    </div>
  )


  component.render = function() {
    return (
      <About />
    )
  }
  return component;
}

export default CreateAbout;






