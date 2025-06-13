import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='errorPage' >
      <h1>404 Not Found ❌</h1>
      <NavLink to='/' >Home page</NavLink>
      {/* <MyButton className={classes.buttonError}  >Home page</MyButton> */}
    </div>
  );
};

export default NotFoundPage;