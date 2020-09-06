import { Injectable } from "@angular/core";
import { ScrappedEvent } from '../ScrappedEvent';
import { HttpClient } from '@angular/common/http';
import { EventHouse } from '../EventHouse';

@Injectable()
export class EventSearchService {

    private static readonly API_PATH = "/api/search/";

    constructor(
        private httpClient: HttpClient
    ) {}

    public async getScrappedEvents(query: string, {
        all, notikumi, wegow, ticketmaster
    }: {
        all: boolean;
        notikumi?: boolean;
        wegow?: boolean;
        ticketmaster?: boolean;
    } = { all: true }): Promise<ScrappedEvent[]> {
        let houses = [];
        if (all) {
            houses.push(...[EventHouse.NOTIKUMI, EventHouse.WEGOW]);
        } else {
            if (notikumi) {
                houses.push(EventHouse.NOTIKUMI);
            }
            if (wegow) {
                houses.push(EventHouse.WEGOW);
            }
            if (ticketmaster) {
                houses.push(EventHouse.TICKETMASTER);
            }
        }
        return this.httpClient
            .get<ScrappedEvent[]>(`${EventSearchService.API_PATH}${query}`, {
                params: { houses }
            })
            .toPromise();
    }

}