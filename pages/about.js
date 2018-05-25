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
            rrrrooooowwwwwwwwwwwww
        </div>
      )}
    </Motion>

    <style jsx>{`
        .target-div {
          font: 50px Helvetica, Arial, sans-serif;
          display: inline-block;
          background-color: #C1C0B9
        }
     `}</style>

  </Layout>
)
