import { Component, EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-products-header",
  templateUrl: "products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent {
  sort = "desc";
  itemsShowCount = 12;
  @Output() columnsUpdated = new Subject<number>();

  onSortUpdated(newsort: string) {
    this.sort = newsort;
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colNum: number) {
    this.columnsUpdated.next(colNum);
  }
}
