import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DndApi } from 'src/app/config/config';

@Injectable({
    providedIn : 'root'
})

export class SpellsService {

    private readonly url: string = DndApi.apiUrl;

    constructor(
        private http : HttpClient,
        
    ) {}

    getSpells() : Observable<any> {
        return this.http.get(`api/api/spells`)
    }

}