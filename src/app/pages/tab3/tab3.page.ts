import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
               private uiService: UiServiceService,
               private postsService: PostsService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

  }

  async actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) {return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario);

    if ( actualizado ) {
      // toast con ensaje de actualizado
      this.uiService.presentToast( 'Registro actualizado');
    } else {
      // toast con msj de error
      this.uiService.presentToast(' No se pudo actualizar');
    }

  }

  logout() {

    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();

  }
}
