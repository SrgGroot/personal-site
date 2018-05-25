import Head from 'next/head'
import Layout from '../components/layout'

export default () => (
  <div className='root'>
    <Layout title='Sam Groot'>
        <div className='message'>
          My name is Sam Groot.<br/><br/> I like to use creative solutions to solve 
          expensive problems.
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