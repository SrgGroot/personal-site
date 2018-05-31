import Head from 'next/head'
import Layout from '../components/layout'
import {Motion, spring} from 'react-motion'
import posed from "react-pose";

const CreateIndex = (props) => {
  const component = new React.Component(props);
  component.state = {
    subject: "My name is Sam Groot.",
    body: " I use creative solutions to solve expensive problems.",
    changeName: "am Groot."
  };
  component.handleChange = (event) => {
    component.setState({[event.target.name]: event.target.value});
  }
  component.componentDidMount = function() {
    component
  }
  component.render = function() {
    return (
      <div className='root'>
        <Layout title='Sam Groot'>
          <div className='message'>
            {component.state.subject}
            <br/><br/> 
            {component.state.body}
          </div>
        </Layout>
        
        <style jsx>{`
        div {
          font: 23px Times, Arial, sans-serif;
        };
        .message {
          text-align: center;
          padding-top: 50px;
        };
        `}</style>

      </div>
    )
  }
  return component;
}

export default CreateIndex;