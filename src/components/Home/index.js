import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Home = () => {
  return (
    <section className={css(styles.home)}>
      <h1>Commissions' Status</h1>
      <div>

      </div>
    </section>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFF',
    padding: '20px',
  }
});


export default Home;
