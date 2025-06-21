import http from '@/http.common';

class PackageDataService {
  getAll() {
    return http.get('/packages');
  }
}

export default new PackageDataService();
