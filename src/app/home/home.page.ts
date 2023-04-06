import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { contatos } from '../models/contatos.model';
import { CommonModule } from '@angular/common';
import { DadosService } from '../services/dados.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage {

  listaContatos: contatos[] = [
    {
      foto: 'https://lindyhealth.com/wp-content/uploads/2022/06/chris-bumstead-profile.png',
      nome: 'Chris Bumstead',
      email: 'chris@etec.sp.gov.br',
      id: 1,
      pagina: '/contato'
    },
    {
      foto: 'https://wikiofcelebs.com/wp-content/uploads/2022/12/Ramon-Dino.jpg',
      nome: 'Ramon Dino',
      email: 'ramonzito@etec.sp.gov.br',
      id: 2,
      pagina: '/contato'
    },
    {
      foto: 'https://barbend.com/wp-content/uploads/2022/01/Untitled-design-14.png',
      nome: 'Rafael Brandão',
      email: 'brandinho@etec.sp.gov.br',
      id: 3,
      pagina: '/contato'
    },
    {
      foto: 'https://gazetadodia.com/wp-content/uploads/2022/11/renato-cariani.jpg',
      nome: 'Renato Cariani',
      email: 'renatoc@etec.sp.gov.br',
      id: 4,
      pagina: '/contato'
    },
    {
      foto: 'https://uploads.metropoles.com/wp-content/uploads/2022/12/30101520/Quem-e-Paulo-Muzy.jpg',
      nome: 'Paulo Muzy',
      email: 'muzypaulo@etec.sp.gov.br',
      id: 5,
      pagina: '/contato'
    }
  ];


  constructor(public dadosService: DadosService, public route: Router) {}

  exibirContato(contato: contatos){
    this.dadosService.guardarDados('contato', contato);
    this.route.navigateByUrl('/contato')
  }
  

}
