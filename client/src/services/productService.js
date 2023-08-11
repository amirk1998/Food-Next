import http from './httpService';

export function getProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
  //qs => query-string
}

export function getProductsBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function getProductsById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

//Admin Related Functions
export function addProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function updateProduct({ productId, data }) {
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}

export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}
