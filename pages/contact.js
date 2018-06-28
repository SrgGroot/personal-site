import Layout from '../components/layout'
import Number from '../components/number'

export default () => (
  <Layout title='Contact me'>
    <div className='contact'>
      <Number number='XXX-XXX-XXXX'/>
    </div>

    <style jsx>{`
    .contact {
      text-align: center;
      font: 35px Helvetica, Arial, sans-serif;
    }
  `}</style>
  </Layout>
)
