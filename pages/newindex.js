import fetch from 'node-fetch'
import {Component} from 'react'
import Layout from '../components/layout';

export default class extends Component {
  /*
  * Passes props to page. You can only use this in a page component. 
  * https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
  */
  static async getInitialProps({ req }) {
    const res = await fetch('https://colorhuntapi.now.sh/')
    const json = await res.json()
    return { 
      palettes: json
    }
  }

  render() {
    const randomPalette = this.props.palettes[Math.floor(Math.random() *this.props.palettes.length)]
    return (
      <div className='root'>
        <Layout title='Color Palettes'>
          <div className="content">
            <div palette={randomPalette} id="c1">
              {randomPalette.c1}
            </div>
            <div palette={randomPalette} id="c2">
              {randomPalette.c2}
            </div>
            <div palette={randomPalette} id="c3">
              {randomPalette.c3}
            </div>
            <div palette={randomPalette} id="c4">
              {randomPalette.c4}
            </div>
          </div>
          <style jsx>{`
            #c1 {
              background: #${randomPalette.c1};
              text-align: center;
              padding-top: 50px;
            };
            #c2 {
              background: #${randomPalette.c2};
              text-align: center;
              padding-top: 50px;
            };
            #c3 {
              background: #${randomPalette.c3};
              text-align: center;
              padding-top: 50px;
            };
            #c4 {
              background: #${randomPalette.c4};
              text-align: center;
              padding-top: 50px;
            };
            .content {
              text-align: center;
              width: 100%;
              max-width: 600px;
              padding-top: 50px;
              padding-left: 5px;
              padding-right: 5px;
            };
          `}</style>
        </Layout>
      </div>
    )
  }
}

  