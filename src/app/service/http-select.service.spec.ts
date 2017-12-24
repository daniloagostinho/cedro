import { TestBed, inject } from '@angular/core/testing';

import { HttpSelectService } from './http-select.service';

describe('HttpSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSelectService]
    });
  });

  it('should be created', inject([HttpSelectService], (service: HttpSelectService) => {
    expect(service).toBeTruthy();
  }));
});
