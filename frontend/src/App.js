import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/hello/')  // если настроен proxy в package.json
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка сети');
        }
        return res.json();
      })
      .then(data => {
        setMsg(data.message);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.container}><h2>Загрузка...</h2></div>;
  }

  if (error) {
    return <div style={styles.container}><h2 style={{ color: 'red' }}>Ошибка: {error}</h2></div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{msg}</h1>
      <p style={styles.subtitle}>Это пример страницы React, получающей данные с Django API.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    marginTop: '15vh',
    padding: '20px',
    color: '#333',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
  }
};

export default App;
