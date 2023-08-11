import http from './httpService';

export function createPayment() {
  return http.post('/payment/create').then(({ data }) => data.data);
}

//Admin Related Functions
export function getAllPayments() {
  return http.get('/admin/payment/list').then(({ data }) => data.data);
}
