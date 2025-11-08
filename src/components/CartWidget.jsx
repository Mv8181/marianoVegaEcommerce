function CartWidget({ count = 0 }) {
  return (
    <button style={styles.btn} aria-label="Carrito">
      🛒
      <span style={styles.badge}>{count}</span>
    </button>
  );
}

const styles = {
  btn: {
    position: 'relative',
    fontSize: 20,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -10,
    background: '#111',
    color: '#fff',
    borderRadius: 12,
    padding: '2px 6px',
    fontSize: 12
  }
};

export default CartWidget;
