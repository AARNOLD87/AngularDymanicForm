import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {
  constructor(private httpClient: HttpClient) {}

  public getMetadata() {
    return this.httpClient.get('../../assets/meta-data.json');
  }

  public getData() {
    return this.httpClient.get('../../assets/data.json');
  }
}
