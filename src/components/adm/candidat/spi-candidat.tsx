import { Component, State } from '@stencil/core';





@Component({
  tag: 'spi-candidat',
  styleUrl: 'spi-candidat.scss'
})
export class Candidat {


  @State() mySearch1: any[] = [];
  @State() mySearch2: any[] = [];
  @State() candidats: any[] = [];
  @State() item: any = [];
  @State() name: String;

  InputNom: HTMLInputElement;

  componentWillLoad() {
    fetch("https://api-dosispi.cleverapps.io/candidats")
      .then(response => response.json()).
      then(data => {
        this.candidats = data;
      })
  }





  getens(num) {
    let t1 = document.getElementById("myModal");
    t1.classList.toggle("is-active");
    console.log(num);
    let url = 'https://api-dosispi.cleverapps.io/candidats/'
    fetch(url + num)
      .then(response => response.json())
      .then(data => {
        this.item = data;
        console.log(this.item);
      });

  }

  deleteCandidat(idCandidat) {
    if (confirm("Etes-vous sûr de vouloir supprimer ce candidat?")) {
      fetch('https://api-dosispi.cleverapps.io/candidats/' + idCandidat, {
        method: 'DELETE'
      })
        .then(response => {
          console.log(response);
          location.reload();
        }
        );
    }

  }


  render() {


    return (

      <div class="container">


        <div class="column is-6 is-offset-3">
          <h1 class="title">
            Liste des candidats
                          </h1>
          <h2 class="subtitle">
            Projet SPI-ADM DOSI 2018-2019
                          </h2>
          <div class="box">
            <div class="field is-grouped">
              <p class="control is-expanded">

                <input onInput={(e: any) => this.name = e.target.value} class="input" type="text" placeholder="Rechercher.." />
              </p>
              <p class="control">

                <a href={"/candidats/search/" + this.name} class="button is-info">Valider</a>
              </p>
            </div>
          </div>
        </div>
        <br /><br />

        <div class="row columns">
          <div class="row columns is-multiline">
            {this.candidats.map((candidat) =>

              <div class="column is-one-third">
                <div class="card large">

                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img src="https://cdn1.iconfinder.com/data/icons/people-set-2/120/MaleFemale-512.png" alt="Image" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <span class="title is-4 no-padding">{candidat.prenom} {candidat.nom}</span>
                        <p><span class="title is-6"><a href={"mailto:" + candidat.email}>Mail</a></span>&nbsp; - &nbsp;<span class="title is-6"><a href={"tel:" + candidat.telephone}>Appeler</a></span></p>

                      </div>
                    </div>
                    <div class="content has-text-left">
                      <b>Promo :   </b> <span> {candidat.promotion == null ? "Pas de promotion" : candidat.promotion.id.codeFormation + " | " + candidat.promotion.id.anneeUniversitaire} </span>
                      <br />
                      <span><b>Nationalité :  </b>{candidat.nationalite} </span>
                      <br />
                      <span><b>Université d'origine :  </b>{candidat.universiteOrigine}</span>
                      <br />

                    </div>
                  </div>
                  <button class="card-footer-item button is-info" aria-label="close" onClick={() => this.getens(candidat.noCandidat)}>Détails</button>
                  &nbsp;&nbsp;&nbsp;
    <a onClick={() => this.deleteCandidat(candidat.noCandidat)} class="card-footer-item button is-danger">Supprimer</a>

                  <br />
                  <br />
                </div>

                <div class="modal" id="myModal" >
                  <div class="modal-background" onClick={() => this.getens(candidat.noCandidat)}></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title">{this.item.nom} {this.item.prenom}</p>
                      <button class="delete" aria-label="close" onClick={() => this.getens(candidat.noCandidat)}></button>
                    </header>
                    <section class="modal-card-body">

                      <b>Promo :   </b> <span> {this.item.promotion == null ? "Pas de promotion" : this.item.promotion.id.codeFormation + " | " + this.item.promotion.id.anneeUniversitaire} </span>
                      <br />
                      <span><b>Nationalité :  </b>{this.item.nationalite} </span>
                      <br />
                      <span><b>Université d'origine :  </b>{this.item.universiteOrigine}</span>
                      <br />
                      <span><b>Email :  </b>{this.item.email}</span>
                      <br />
                      <span><b>Télephone :  </b>{this.item.telephone}</span>
                      <br />
                      <span><b>Sexe :  </b>{this.item.sexe}</span>
                      <br />
                      <span><b>Adresse :  </b>{this.item.adresse}</span>
                      <br />




                    </section>
                    <footer class="modal-card-foot">
                      <button class="button is-danger is-outlined" onClick={() => this.deleteCandidat(this.item.noCandidat)}>Supprimer</button>
                      <button class="button" onClick={() => this.getens(candidat.noCandidat)}>Cancel</button>
                    </footer>
                  </div>
                </div>

              </div>


            )}
          </div>
        </div>
      </div>



    );
  }
}
