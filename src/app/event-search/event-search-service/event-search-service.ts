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
        all, notikumi, wegow
    }: {
        all: boolean;
        notikumi?: boolean;
        wegow?: boolean;
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
        }
        return this.httpClient
            .get<ScrappedEvent[]>(`${EventSearchService.API_PATH}${query}`, {
                params: { houses }
            })
            .toPromise();
    }

}