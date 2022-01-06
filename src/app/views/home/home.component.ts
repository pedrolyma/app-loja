import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name: 'Home', route: "", icon: "home", topo: "Voltar Para Home" },
    {name: 'Usuarios', route: "usuarios", icon: "person_pin", topo: "Controle do Cadastro de Usuarios"},
    {name: 'Seçoes', route: "secoes", icon: "topic", topo: "Controle do Cadastro de Secoes"},
    {name: 'Marcas', route: "marcas", icon: "shopping_basket", topo: "Controle do Cadastro de Marcas"},
    {name: 'Cores', route: "cores", icon: "palette", topo: "Controle do Cadastro de Cores"},
    {name: 'Unidades', route: "unidades", icon: "home", topo: "Controle do Cadastro de Unidades"},
    {name: 'Localização', route: "localizacao", icon: "home", topo: "Controle do Cadastro de Localizacao"},
    {name: 'Grades', route: "grades", icon: "home", topo: "Controle do Cadastro de Localizacao"},
    {name: 'Modelos', route: "modelos", icon: "home", topo: "Controle do Cadastro de Localizacao"},
    {name: 'Fornecedor', route: "fornecedores", icon: "home", topo: "Controle do Cadastro de Localizacao"},
    {name: 'Produtos', route: "produtos", icon: "home", topo: "Controle do Cadastro de Localizacao"},
  ]
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener)
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  // [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
