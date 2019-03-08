import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'spi-editcandidat',
    styleUrl: 'spi-editcandidat.css'
})
export class SpiEditcandidat {

    @Prop() history:RouterHistory;
    @State() myCandidat : any;
    @Prop() match : MatchResults;
     title: string;
     candidat: string;
     autor: string;
     _id : any;

     componentWillLoad() {
        let id = this.match.params.myid;
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
      .then(response =>response.json()).
        then(data=>{
          this.myCandidat=data;
        })
     }

     editCandidat(e) {
        e.preventDefault();
        console.log("!");
        const title = this.title;
        const article = this.candidat;
        const autor = this.autor;
        const _id = this._id;
        const candidatEdited = {
          _id,  
          title,
          article,
          autor
        };
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(candidatEdited)
        })
          .then(function(res) {
            console.log(res.json());
          })
          .then(function(data) {
            console.log(JSON.stringify(data));
          });
      }

    render() {
        return (
            <div>
                <p>Hello SpiEditcandidat!</p>
            </div>
        );
    }
}
