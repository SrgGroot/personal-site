export default ({children, number}) => (
      <div className='contact'>
        <div className='target-div'>Call me at {number}</div>
        {children}

        <style jsx>{`
        .target-div {
          margin-top: 50px;
          font: 35px Helvetica, Arial, sans-serif;
          text-align: center;
        }
     `}</style>

      </div>
  )