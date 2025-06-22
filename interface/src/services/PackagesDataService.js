import http from '@/http.common';

class PackageDataService {
  getAll() {
    return http.get('/packages');
  }

  create(data) {
    return http.post('/packages', data);
  }
}

export default new PackageDataService();
