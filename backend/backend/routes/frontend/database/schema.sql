CREATE TABLE localizacoes (
  id SERIAL PRIMARY KEY,
  veiculo VARCHAR(20),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  status VARCHAR(10),
  data_hora TIMESTAMP
);
