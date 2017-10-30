import { TestBed, inject } from '@angular/core/testing';

import { RemoteConnectionService } from './remote-connection.service';

describe('RemoteConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteConnectionService]
    });
  });

  it('should be created', inject([RemoteConnectionService], (service: RemoteConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
