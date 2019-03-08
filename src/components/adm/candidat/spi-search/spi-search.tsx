import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'spi-search',
    styleUrl: 'spi-search.scss'
})

export class SpiSearch {

      @State() item: any[] = [];

    InputNom: HTMLInputElement;

    @Prop() match: MatchResults;
    @State() name : String;

    componentWillLoad() {
        let url = 'http://api-dosispi.cleverapps.io/candidats/nom/'
        let nom = this.match.params.name;
        return fetch(url + nom)
            .then(response => response.json())
            .then(data => {
                this.item = data;
                console.log(this.item);
            })
            ;
            
    }

    getens() {
        let url = 'http://dosispi.cleverapps.io/candidat/nom/'
        let nom = this.match.params.name;
        console.log(name);
        return fetch(url + nom)
            .then(response => response.json())
            .then(data => {
                this.item = data;
            });
    }

    render() {
        

            return (
                <div class="center">
                    <br/>
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
                    {this.item.map((myItem) =>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <div class="content">
                            <p class="title">{myItem.nom} {myItem.prenom}</p>
                            <p class="subtitle">Université d'origine : {myItem.universiteOrigine}</p>
                                
                                <div class="content">
                                
                                    <b>Promo :   </b> <span> {myItem.promotion == null ? "Pas de promotion" : myItem.promotion.id.codeFormation + " | " + myItem.promotion.id.anneeUniversitaire} </span>
                                    <br />
                                    <span><b>Nationalité :  </b>{myItem.nationalite} </span>
                                    <br />
                                    
                                    <span><b>Email :  </b>{myItem.email}</span>
                                    <br />
                                    <span><b>Télephone :  </b>{myItem.telephone}</span>
                                    <br />
                                    <span><b>Sexe :  </b>{myItem.sexe}</span>
                                    <br />
                                    <span><b>Adresse :  </b>{myItem.adresse}</span>
                                    <br />
                                </div>
                            
                            </div>
                            
                        </article>
                    </div>
                    )}




                    
                </div>
            )
        
    }
}