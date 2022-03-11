import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../actions/actions-types';

function Banner() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.interface);

  // On lit les propriétés firstname et lastname du state de userReducer
  const { firstname, lastname } = useSelector((state) => state.user);

  const changeMode = () => {
    dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header>
      <h1 style={styles.mainTitle}>
        <Link to="/">EZ Shopping</Link>
      </h1>

      <div style={{ display: 'flex' }}>
        <div style={styles.menuItem}>
          👱‍♂️{' '}
          <Link to="/profile">
            {firstname} {lastname}
          </Link>
        </div>
        <div style={styles.menuItem}>
          🛒{' '}
          <Link to="/basket">
            <strong>4</strong> items
          </Link>
        </div>
        <div style={styles.menuItem}>
          {mode === 'dark' ? '🌕' : '🌑'}{' '}
          <Link to="#" onClick={changeMode}>
            {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Link>
        </div>
      </div>
    </header>
  );
}

const styles = {
  menuItem: { margin: '1rem', fontSize: '1.2rem' },
  mainTitle: { fontSize: '2rem', textAlign: 'center', margin: '1rem' },
};

export default Banner;
