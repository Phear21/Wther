import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/searchservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  searchTerm: string='';

  constructor(private router: Router,private searchService: SearchService) { }

  search(): void {
    // Access the entered search term using this.searchTerm
    // Perform any desired logic with the search terx
    this.searchService.setSearchTerm(this.searchTerm);
      
  // Navigate to the HomeComponent with updated route parameters
  this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/home']);
  });
  }

}
