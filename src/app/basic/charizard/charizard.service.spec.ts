import { TestBed } from '@angular/core/testing';

import { CharizardService } from './charizard.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharizardService', () => {
  let service: CharizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CharizardService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('Should show the pokemon information', (done) => {
    service.getPokemon(1)
      .subscribe( pokemon => {
        expect(pokemon.name).toBe('bulbasaur')
        done()
      })
  })
});
