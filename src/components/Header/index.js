import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import portrait from '../../assets/images/emi.png';

const Header = () => {
  return (
    <header className={css(styles.heroHeader)}>
      <img src={portrait} alt="" className={css(styles.portrait)} />
      <h1 className={css(styles.name)}>Emilia Rondón</h1>
      <h3>Illustrator</h3>
    </header>
  )
}

const styles = StyleSheet.create({
  heroHeader: {
    padding: '8rem 4rem',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'rgba(16, 164, 255, 0.7)',
  },
  portrait: {
    backgroundColor: '#FFF',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    padding: '5px',
    marginBottom: '20px'
  },
  name: {
    fontFamily: 'ArchisticoBold',
    fontSize: '10rem'
  }
});

export default Header;
