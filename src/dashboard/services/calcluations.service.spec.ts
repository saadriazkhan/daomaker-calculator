/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalcluationsService } from './calcluations.service';

describe('Service: Calcluations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcluationsService]
    });
  });

  it('should ...', inject([CalcluationsService], (service: CalcluationsService) => {
    expect(service).toBeTruthy();
  }));
});
