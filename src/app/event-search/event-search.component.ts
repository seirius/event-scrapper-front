import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventSearchService } from './event-search-service/event-search-service';
import { ScrappedEvent } from './ScrappedEvent';

@Component({
    selector: 'app-event-search',
    templateUrl: './event-search.component.html',
    styleUrls: ['./event-search.component.scss'],
    providers: [EventSearchService]
})
export class EventSearchComponent implements OnInit {

    public searchIcon = faSearch;

    public query: string;
    public events: ScrappedEvent[];

    public imgPlaceholder = "assets/image_placeholder.png";

    constructor(
        private eventSearchService: EventSearchService
    ) { }

    ngOnInit(): void {
    }

    public async search(event: Event): Promise<void> {
        event.preventDefault();
        this.events = await this.eventSearchService.getScrappedEvents(this.query);
    }

}
