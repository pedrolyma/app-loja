import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // { path: '', loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule)},
  // { path: 'usuarios', loadChildren: () => import('./components/usuarios/usuario.module').then(m => m.UsuarioModule)},
  { path: 'secao', loadChildren: () => import('./components/secoes/secao.module').then(m => m.SecaoModule)},
  { path: 'marcas', loadChildren: () => import('./components/marcas/marca.module').then(m => m.MarcaModule)},
  { path: 'cores', loadChildren: () => import('./components/cores/cor.module').then(m => m.CorModule)},
  { path: 'unidades', loadChildren: () => import('./components/unidades/unidade.module').then(m => m.UnidadeModule)},
  { path: 'localizacoes', loadChildren: () => import('./components/localizacao/localizacao.module').then(m => m.LocalizacaoModule)},
  { path: 'grades', loadChildren: () => import('./components/grades/grade.module').then(m => m.GradeModule)},
  { path: 'modelos', loadChildren: () => import('./components/modelos/modelo.module').then(m => m.ModeloModule)},
  { path: 'fornecedores', loadChildren: () => import('./components/fornecedores/fornecedor.module').then(m => m.FornecedorModule)},
  { path: 'produtos', loadChildren: () => import('./components/produtos/produto.module').then(m => m.ProdutoModule)},
  { path: 'contas', loadChildren: () => import('./components/contas/contas.module').then(m => m.ContasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
