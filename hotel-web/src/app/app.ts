import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  mobileMenuOpen = false;
  isNavbarScrolled = false;

  constructor(private router: Router) {
    window.addEventListener('scroll', () => {
      this.isNavbarScrolled = window.scrollY > 50;
    });
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    
    if (element) {
      // Element exists on current page, scroll to it
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Element doesn't exist, navigate to home first, then scroll
      this.router.navigate(['/'], { fragment: section }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
