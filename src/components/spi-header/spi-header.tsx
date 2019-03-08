import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar is-light has-shadow "
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
        <div class="navbar-brand">
        <span class="navbar-item">
              <a href="/"><strong>SPI-ADM</strong></a>
            </span>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Candidats
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="/addCandidat">
            Ajouter Candidat
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            ...
          </a>
        </div>
      </div>
      

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Enseignants
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Ajouter
          </a>

          <hr class="navbar-divider"/>
          <a class="navbar-item">
            ...
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Infos
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          
        </div>
      </div>
      </div>
        </div>
      </nav>
    );
  }
}
