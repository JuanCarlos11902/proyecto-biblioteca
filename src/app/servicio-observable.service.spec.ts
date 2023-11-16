import { TestBed } from '@angular/core/testing';

import { ServicioObservableService } from './servicio-observable.service';

describe('ServicioObservableService', () => {
  let service: ServicioObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
