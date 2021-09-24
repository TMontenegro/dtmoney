import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transactions: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {id: 1, title: 'Freelancer de website', type: 'deposit', category: 'dev', amount: 1000, createdAt: new Date('2021-02-12 09:00:00')},
        {id: 2, title: 'Arrendamento', type: 'withdraw', category: 'home', amount: 700, createdAt: new Date('2021-02-12 09:00:00')},
        {id: 3, title: 'Salário', type: 'deposit', category: 'work', amount: 1500, createdAt: new Date('2021-02-12 09:00:00')}
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
