import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Training-Day4';
  responseData;
  isEnabled = true;
  buttonCliked = false;
  coffeeReady = false;
  cancelCliked = false;
  selectedCoffee = "";
  constructor(private dataService: DataService) {
      this.dataService.get_data().subscribe((res)=>{
        this.responseData = res;
      });
    }
    coffeeSelcted (coffee) {
      this.selectedCoffee = coffee;
      this.buttonCliked = true;
      this.coffeeReady = false;
      this.isEnabled = false;
      setTimeout(() => {
        if (!this.cancelCliked ) {
          this.buttonCliked = false;
          this.coffeeReady = true;
        }
      }, 3000);
    }
    cancelCoffee () {
      this.cancelCliked = true;
      this.buttonCliked = false;
      this.coffeeReady = false;
      this.isEnabled = true;
    }
}
