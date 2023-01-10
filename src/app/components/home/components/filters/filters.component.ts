import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filter.component.html",
  styles: [],
})
export class FiltersComponent {
  categories = ["Electronics", "Groceries", "Appliances"];

  @Output() showCategory = new EventEmitter<string>();

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
