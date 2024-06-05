import { Link } from 'react-router-dom';

const PageNotFound_xx = () => {
  return (
    <>
      <div>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <header className='border-b border-primary-900 px-8 py-5'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
              <Link className='flex items-center gap-4 z-10' to='/'>
                <img width='48px' height='36px' src='/logo.webp' />
                <span>The Wild Oasis (123456789)</span>
              </Link>
              <nav className='z-10 text-xl'>
                <ul className='flex gap-16 items-center'>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/cabins_xx'
                    >
                      Cabins_xx
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/about_xx'
                    >
                      About_xx
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/contact_xx'
                    >
                      Contact_xx
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/login_xx'
                    >
                      Login_xx
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='flex-1 px-8 py-12 grid'>
            <main className='h-full mx-auto w-full'>
              <h1 className='text-4xl mb-5'>Something Wrong!</h1>
              <h1 className='text-4xl'>Page Not Found!</h1>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageNotFound_xx;
