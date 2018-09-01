import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.heroHeader)}>
      <h1>Emilia Rondón</h1>
      <h3>Designer</h3>
    </header>
  )
}

const styles = StyleSheet.create({
  heroHeader: {
    padding: '8rem 4rem',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default Header;
