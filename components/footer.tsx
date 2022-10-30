import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="u-bg-dark-green u-white u-pad-6">
      <Container>
       <div className="grid grid--align-center">
          <div className="grid-cell u-sm-size-4of12 u-sm-after-2of12">
            <h4 className="u-text-grow-3 u-text-normal u-space-bottom-2">OFFICE</h4>
            <p>2225 NE Martin Luther King Jr. Blvd. #207</p>
            <p className="u-space-bottom-2">Portland OR, 97212</p>
            <a className="u-white" href="tel:1-971-347-9591">(971) 347-9591</a>
          </div>
          <div className="grid-cell u-sm-size-5of12">
            <h4 className="u-text-grow-3 u-text-normal u-space-bottom-2 u-xs-pad-top-1">CONTACT</h4>
            <form className="u-space-items-2">
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="text" placeholder="Email" />
              <textarea className="input textarea" type="text" placeholder="Message"></textarea>
              <a className="button u-size-full">Submit</a>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
