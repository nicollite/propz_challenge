import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from "@angular/core";
import { Item, ItemsService } from "../items.service";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, DoCheck {
  @ViewChild("carousel") carousel: NgbCarousel;

  items: Item[] = [];

  constructor(public itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  ngDoCheck() {
    if (this.carousel) this.carousel.pause();
  }

  transformInMoneyValue(value: number): string {
    return value.toString().replace(/\./gim, ",").replace(/\,/gim, ".");
  }

  getRoundValue(value: number): string {
    return parseInt(value.toString()).toString();
  }

  getDecimalValue(value: number): string {
    return Math.trunc((value - Math.trunc(value)) * 100).toString();
  }
}
