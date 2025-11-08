function ItemListContainer({ greeting }) {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={{ margin: 0 }}>{greeting}</h1>
        <p style={{ color: '#555' }}>
         
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: { maxWidth: 1100, margin: '24px auto', padding: '0 16px' },
  hero: {
    padding: 24,
    border: '1px solid #eee',
    borderRadius: 12,
    background: '#fafafa'
  }
};

export default ItemListContainer;
