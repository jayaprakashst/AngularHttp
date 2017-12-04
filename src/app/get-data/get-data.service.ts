import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {

    url: string
    constructor(private http: HttpClient) {
        this.url = 'https://api.datamuse.com/words?ml='
    }

    call_api(term) {
        return this.http.get(this.url + term);
    }
}