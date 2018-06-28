import Head from 'next/head';
import fetch from 'node-fetch'
import {Motion, spring} from 'react-motion';
import posed from "react-pose";
//components
import Layout from '../components/layout';

//test palette: {"id":"118872","c1":"323643","c2":"606470","c3":"93deff","c4":"f7f7f7","date":"05/22/18","likes":"626"}

const CreateIndex = (props) => {
  const component = new React.Component(props);
  component.state = {
    subject: "My name is Sam Groot.",
    body: "I use creative solutions to solve expensive problems.",
    valuePitch: "I’m a software developer and entrepreneur that helps companies achieve their business goals.",
    loadSubject: false,
    loadBody: false,
    loadValuePitch: false,
    loadColors: false,
    palettes: []
  };
  
  component.handleChange = (event) => {
    component.setState({[event.target.name]: event.target.value});
  }

  

  component.componentDidMount = () => {
    fetch('https://colorhuntapi.now.sh/')
      .then(res => res.json())

    setTimeout(() => {
        component.setState({loadSubject: true })
      }, 333 );
    setTimeout(() => {
      component.setState({loadBody: true })
    }, 1333 );
    setTimeout(() => {
      component.setState({loadValuePitch: true })
    }, 2233 );
    setTimeout(() => {
      component.setState({loadColors: true })
    }, 3233 );
  }

  component.componentDidUpdate = () => {
    
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

  const Index = (props) => (
    <div className='root'>
      <Layout title='Sam Groot'>
        <div className='content'>
          <ContentAnimation
            pose={ 
              component.state.loadSubject 
              ? "visible" 
              : "hidden" 
          }>
            <div className='target-div'> 
              {component.state.subject}
            </div> 
          </ContentAnimation>
          <br/>
          <ContentAnimation
            pose={ component.state.loadBody 
              ? "visible" 
              : "hidden" 
          }>
            {component.state.body}
          </ContentAnimation>
          <br/>
          <ContentAnimation
            pose={ component.state.loadValuePitch
              ? "visible" 
              : "hidden" 
          }>
            {component.state.valuePitch}
            {component.state.palettes.c1}
          </ContentAnimation>
        </div>
      </Layout>
      
      <style jsx>{`
      div {
        font: 23px Times, Arial, sans-serif;
      };
      .target-div {
        text-align: center;
        font: 35px Helvetica, Arial, sans-serif;
      };
      .content {
        text-align: center;
        padding-top: 50px;
        max-width: 600px;
      };
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      `}</style>
    </div>
  )

  component.render = function() {
    
    return (
      <Index/>
    )
  }
  return component;
}

export default CreateIndex;