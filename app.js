const express = require('express');
const Sequelize = require('sequelize');

const app = express();

// Definimos los parámetros de conexión
const sequelize = new Sequelize('farmacia', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Definimos los modelos
const Cliente = sequelize.define('clientes', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nomcli: Sequelize.STRING,
  apecli: Sequelize.STRING,
  nrodnicli: Sequelize.STRING,
  telcli: Sequelize.STRING
});

const Especialidad = sequelize.define('especialidad', {
  CodEspec: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionEsp: Sequelize.STRING
});

const TipoMedicamento = sequelize.define('tipomedic', {
  CodTipoMed: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: Sequelize.STRING
});

const Medicamento = sequelize.define('medicamento', {
  CodMedicamento: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionMed: Sequelize.STRING,
  fechaFabricacion: Sequelize.DATE,
  fechaVencimiento: Sequelize.DATE,
  Presentacion: Sequelize.STRING,
  stock: Sequelize.INTEGER,
  precioVentaUni: Sequelize.FLOAT,
  precioVentaPres: Sequelize.FLOAT,
  Marca: Sequelize.STRING
});

// Establecemos las relaciones
Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec' });
Medicamento.belongsTo(TipoMedicamento, { foreignKey: 'CodTipoMed' });

// Autenticamos la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch(error => {
    console.error('Error de conexión a la base de datos:', error);
  });

// Sincronizamos los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados correctamente');
  })
  .catch(error => {
    console.error('Error al sincronizar modelos:', error);
  });

// Mostramos todos los registros de la tabla clientes
app.get('/clientes', (req, res) => {
  Cliente.findAll()
    .then(clientes => {
      res.json(clientes);
    })
    .catch(error => {
      console.error('Error al obtener clientes:', error);
      res.status(500).json({ error: 'Error al obtener clientes' });
    });
});

// Mostramos todos los registros de la tabla medicamentos
app.get('/medicamentos', (req, res) => {
  Medicamento.findAll()
    .then(medicamentos => {
      res.json(medicamentos);
    })
    .catch(error => {
      console.error('Error al obtener medicamentos:', error);
      res.status(500).json({ error: 'Error al obtener medicamentos' });
    });
});

// Mostramos todos los registros de la tabla especialidades
app.get('/especialidades', (req, res) => {
  Especialidad.findAll()
    .then(especialidades => {
      res.json(especialidades);
    })
    .catch(error => {
      console.error('Error al obtener especialidades:', error);
      res.status(500).json({ error: 'Error al obtener especialidades' });
    });
});

// Mostramos todos los registros de la tabla tipos de medicamentos
app.get('/tiposmedicamentos', (req, res) => {
  TipoMedicamento.findAll()
    .then(tiposmedicamentos => {
      res.json(tiposmedicamentos);
    })
    .catch(error => {
      console.error('Error al obtener tipos de medicamentos:', error);
      res.status(500).json({ error: 'Error al obtener tipos de medicamentos' });
    });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
