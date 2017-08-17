import { Component } from '@angular/core';

@Component({
  selector: 'about-tripane',
  templateUrl: './about-tripane.component.html',
  styleUrls: [ './about-tripane.component.css' ]
})
export class AboutTripaneComponent { 
  title = "Dołącz do Tripane!"  
  description = `Znasz to uczucie, kiedy chcesz gdzieś jechać, ale nie masz z kim? Pewnie zastanawiasz się, czy jest więcej osób, które mają ten problem...
                A co gdyby połączyć wszytkie osoby, które szukają kompanów na wspólny wyjazd? Teraz to proste! 
                Poznawaj nowe osoby, odkrywaj wspaniałe miejsca i dziel koszty podróży!`;
  registerTxt = "Zarejestruj się już teraz!";
}