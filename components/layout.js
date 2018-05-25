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
          </nav>
        </header>
        
        <div className='content'>
          { children }
        </div>

        <footer>
          {'I\'m a footer'}
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
        nav {
          text-align: center;
          font: 23px Helvetica, Arial, sans-serif;
          padding: 12px;
          padding-top: 20px;
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          right: 0;
        };
        a {
          padding: 20px;
          color: #00ADB5;
          text-decoration: none;
        };
        div {
          padding-top: 40px;
        };
        footer {
          padding-top: 40px;
          padding-bottom: 10px;
          font: 12px Helvetica, Arial, sans-serif;
          text-align: center;
        };
        .root {
          height: 100%;
        };
        .content {
          padding: 10px;
        };
        `}</style>

      </div>
    )}

  </Motion>
)