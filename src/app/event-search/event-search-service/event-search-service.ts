import { Injectable } from "@angular/core";
import { ScrappedEvent } from '../ScrappedEvent';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventSearchService {

    private static readonly API_PATH = "/api/search/";

    constructor(
        private httpClient: HttpClient
    ) {}

    public async getScrappedEvents(query: string): Promise<ScrappedEvent[]> {
        return this.httpClient
            .get<ScrappedEvent[]>(`${EventSearchService.API_PATH}${query}`)
            .toPromise();
    }

}