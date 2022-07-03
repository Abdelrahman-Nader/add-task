import { TestBed } from '@angular/core/testing';

import { TaskesService } from './taskes.service';

describe('TaskesService', () => {
  let service: TaskesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
