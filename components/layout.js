import Link from 'next/link'
import Head from 'next/head'
import {Motion, spring} from 'react-motion';

export default ({ children, title }) => (
  <Motion defaultStyle={{ x: -10, opacity: 0 }} 
            style={{ x: spring(0), opacity: spring(1) }}>
    {(style) => (
      <div className='root'
          style={{
          transform: `translateX(${style.x}px)`,
          opacity: style.opacity }} >
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
          <nav>
            <Link href='/'><a>Home</a></Link> 
            <Link href='/about'><a>About</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
            <Link href='/newindex'><a>Color Palettes</a></Link>
          </nav>
        </header>
        
        <div id='content'> 
          { children } 
        </div>

        <footer> 
          {'samrgroot@gmail.com'} 
        </footer>

        <style jsx global>{`
          html {
            height: 100%;
          };
          body {
            margin: 0;
            height: 100%;
            background-color: #D5F7FF;
          };
        `}</style>

        <style jsx>{`
        #content {
          padding-top: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        header {
          width: 100%;
        }
        nav {
          text-align: center;
          font: 23px Helvetica, Arial, sans-serif;
          flex: 1;
          padding-top: 20px;
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;

        };
        a {
          padding: 15px;
          color: #00ADB5;
          text-decoration: none;
        };
        @media (max-width: 600px) {
          a {
            padding: 10px;
          };
          nav {
            font: 16px Helvetica, Arial, sans-serif;
          };
        };
        div {
          padding-top: 40px;
          padding-left: 5px;
          padding-right: 5px;
        };
        footer {
          padding-top: 40px;
          padding-bottom: 10px;
          font: 12px Helvetica, Arial, sans-serif;
          text-align: center;
        };
        .root {
          flex: 1;
        };
        `}</style>

      </div>
    )}
  </Motion>
)