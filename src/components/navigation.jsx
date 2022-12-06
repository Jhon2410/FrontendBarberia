export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            BARBESHOP
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Conocenos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Cortes
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contacto
              </a>
            </li>
            <li>
              <a href='http://localhost:3001/' target="blank" className='page-scroll'>
                Iniciar sessión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
