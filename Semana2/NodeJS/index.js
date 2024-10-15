const express = require('express');
const pool = require('./db'); // Importar la conexión a PostgreSQL

const app = express();
app.use(express.json()); // Para poder leer JSON

// Crear un nuevo customer
app.post('/customers', async (req, res) => {
  const { fullname, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO customer (fullname, email) VALUES ($1, $2) RETURNING *',
      [fullname, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear customer');
  }
});

// Obtener todos los customers
app.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customer');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener customers');
  }
});

// Obtener un customer por ID
app.get('/customers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM customer WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener customer');
  }
});

// Actualizar un customer por ID
app.put('/customers/:id', async (req, res) => {
  const { id } = req.params;
  const { fullname, email } = req.body;
  try {
    const result = await pool.query(
      'UPDATE customer SET fullname = $1, email = $2 WHERE id = $3 RETURNING *',
      [fullname, email, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar customer');
  }
});

// Eliminar un customer por ID
app.delete('/customers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM customer WHERE id = $1', [id]);
    res.send('Customer eliminado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar customer');
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
