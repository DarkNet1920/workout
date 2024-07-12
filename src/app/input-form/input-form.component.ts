import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  selectedOptions: string[] = [];
  selectedCount: number = 0;
  userInput:string;
  workoutInput:string;
  timeInput:string;
  users: { userInput: string, workoutInput: string, timeInput: string }[] = [];
  updateSelectedCount(event: Event): void {
    const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
    this.selectedOptions = Array.from(selectedOptions).map(option => option.value);
    this.selectedCount = this.selectedOptions.length;
  }
  filteredItems = this.users;
  filteredWorkouts = this.users;
  searchText: string = '';
  searchWorkout: string = '';

  // pagination
  pageSize=5;
  currentpage=1;
  
  constructor() {}
  onSubmit(){
    if (this.userInput && this.workoutInput && this.timeInput) {
      this.users.push({ userInput: this.userInput, workoutInput: this.workoutInput, timeInput: this.timeInput });
      this.userInput = '';
      this.workoutInput = '';
      this.timeInput = '';
  }
}

filterItems() {
  this.filteredItems = this.users.filter(user =>
    user.userInput.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

filterWorkouts() {
  this.filteredItems = this.users.filter(user =>
    user.workoutInput.includes(this.searchWorkout)
  );
}
}