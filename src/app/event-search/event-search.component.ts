import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventSearchService } from './event-search-service/event-search-service';

@Component({
    selector: 'app-event-search',
    templateUrl: './event-search.component.html',
    styleUrls: ['./event-search.component.scss'],
    providers: [EventSearchService]
})
export class EventSearchComponent implements OnInit {

    public searchIcon = faSearch;

    constructor() { }

    ngOnInit(): void {
    }

}
