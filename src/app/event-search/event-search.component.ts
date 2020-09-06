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

    public all = true;
    public notikumi = false;
    public wegow = false;
    public ticketmaster = false;

    public imgPlaceholder = "assets/image_placeholder.png";

    constructor(
        private eventSearchService: EventSearchService
    ) { }

    ngOnInit(): void {
    }

    public async search(event: Event): Promise<void> {
        event.preventDefault();

        if ([this.all, this.notikumi, this.wegow, this.ticketmaster].every(checked => !checked)) {
            alert("Check atleast one criteria for searching (Wegow, Notikumi...)");
            return;
        }

        this.events = await this.eventSearchService.getScrappedEvents(this.query, {
            all: this.all,
            notikumi: this.notikumi,
            wegow: this.wegow,
            ticketmaster: this.ticketmaster
        });
    }

    public checkedAll(): void {
        if (this.all) {
            this.notikumi = false;
            this.wegow = false;
            this.ticketmaster = false;
        }
    }

}
