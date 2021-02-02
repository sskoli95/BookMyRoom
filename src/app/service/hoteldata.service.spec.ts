import { TestBed } from '@angular/core/testing';

import { HoteldataService } from './hoteldata.service';

describe('HoteldataService', () => {
  let service: HoteldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
