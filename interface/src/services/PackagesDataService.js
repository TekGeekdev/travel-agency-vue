import http from '@/http.common';

class PackageDataService {
  getAll() {
    return http.get('/packages');
  }

  create(data) {
    return http.post('/packages', data);
  }

  getOne(id) {
    return http.get(`/packages/${id}`);
  }

  update(id, data) {
    return http.put(`/packages/${id}`, data);
  }

  delete(id) {
    return http.delete(`/packages/${id}`);
  }
}

export default new PackageDataService();
