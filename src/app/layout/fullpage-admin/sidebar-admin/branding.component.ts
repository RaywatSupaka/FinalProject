import { Component } from '@angular/core';

@Component({
  selector: 'app-branding-admin',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/dark-logo.svg"
          class="align-middle m-2"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingAdminComponent {
  constructor() {}
}
