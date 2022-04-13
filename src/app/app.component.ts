import { Component, ElementRef, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Posters } from './models/imdb-iitems';
import { ImdbTabsService } from './services/imdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './nav-custom.html',
  styleUrls: ['./app.component.css']
})

export class NgbdNavCustom {
  posters$: Observable<Posters[]>;
  typedArray: any;
  splitArray: any;
  searchTerm: string;
  checked: boolean;
  activeClass: HTMLDivElement;
  toggleText: boolean = true;

  constructor(
    private movieService: ImdbTabsService, private el: ElementRef
  ) {}

  @HostListener('blur', ['$event.target']) onBlur(target: any) {
    this.movieService.updatePoster(target.textContent);
  }
  
  toggleClass():any {
    this.activeClass = this.el.nativeElement.querySelector("div.active");
    
    if(this.activeClass.classList.contains('active')){
      this.activeClass.classList.toggle("toggle-grid");
    }
  }

  ngOnInit() {
    this.posters$ = this.movieService.getPostersFromHttp();
    this.posters$.subscribe((arr) => {
      this.splitArray = arr.reduce(function(acc:any, cur) {
        if (!acc[cur["Type"]]) { 
          acc[cur["Type"]] = []; 
        }
        acc[cur["Type"]].push(cur);
        return acc;
      }, {});

      this.typedArray =  [this.splitArray.movie, this.splitArray.series, this.splitArray.game];
    });
  }

}
