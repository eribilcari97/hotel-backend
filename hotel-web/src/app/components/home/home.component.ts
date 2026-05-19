import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isNavbarScrolled = false;
  mobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavbarScrolled = window.scrollY > 50;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen && isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    } else if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  scrollTo(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    // implement actual newsletter logic (e.g. HTTP request)
    alert('Thank you for subscribing – you will hear from us soon.');
  }
}