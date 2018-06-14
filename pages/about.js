import Layout from '../components/layout'
import {Motion, spring} from 'react-motion';

export default () => (
  <Layout title='About us'>
    <Motion defaultStyle={{ x: -10, opacity: 0 }} 
            style={{ x: spring(0), opacity: spring(1) }}>
      {(style) => (
        <div style={{
          transform: `translateX(${style.x}px)`,
          opacity: style.opacity }} 
          className='target-div'> 
            I like JavaScript
            <p className="smaller"> I also like reading articles on web app programming</p>
        </div>
      )}
    </Motion>

    <style jsx>{`
        .target-div {
          margin-top: 50px;
          font: 35px Helvetica, Arial, sans-serif;
          text-align: center;
        }
        .smaller {
          font: 23px Times, Arial, sans-serif;
        }
     `}</style>

  </Layout>
)
