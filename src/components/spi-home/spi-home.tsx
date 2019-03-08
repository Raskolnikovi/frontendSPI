import { Component } from "@stencil/core";
@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {  

  componentWillLoad() {

    }

  render() {
    return (
      <div class="spi-home">
        <div class="container is-large has-text-centered">
          <spi-candidat></spi-candidat>

          

        </div>
      </div>
    );
  }
}
