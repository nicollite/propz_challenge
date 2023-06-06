import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Item {
  id: string;
  imgSrc: string;
  name: string;
  pricing: {
    total: number;
    valueWithoutFees: {
      times: number;
      value: number;
    };
    valueWithFees: {
      times: number;
      value: number;
    };
  };
}

interface ItemsResponse {
  items: Item[];
}

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor(public http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http
      .get<ItemsResponse>("assets/items.json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .pipe(map(res => res.items));
  }
}
