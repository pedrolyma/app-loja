import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { SecaoFiltro, SecaoService } from './../secao.service';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SecaoCrudComponent } from '../secao-crud/secao-crud.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SecaoModel } from 'src/app/models/secao.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-secao-lista',
  templateUrl: './secao-lista.component.html',
  styleUrls: ['./secao-lista.component.css']
})

export class SecaoListaComponent implements OnInit,AfterViewInit {
  secaoUrl = 'http://localhost:8080/api/v1/secao';
  filtro = new SecaoFiltro();
  nameSecao: string = '';
  listaSecao: SecaoModel[] = [];
  displayedColumns: string[] = ['Idsecao', 'Descricaosecao', 'Statussecao', 'actions']
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  arraySecao = new MatTableDataSource(this.listaSecao);
  totalRegistros =0;
  currentPage: number = 1;
  constructor(private secaoService: SecaoService,
              private dialog: MatDialog,
              private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute,
              private cdf: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.arraySecao.sort = this.matSort;
  }

  ngOnInit(): void {
    this.listaSecoes();
 //  this.nameSecao = this.route.snapshot.params.nameSecao;
  }

  load() {
    this.secaoService.listSecao(this.nameSecao, ++this.currentPage)
        .subscribe(secoes => {
          this.listaSecao = this.listaSecao.concat(secoes);
        });
  }

  listaSecoes(pagina = 0) {
    this.filtro.pagina = pagina;
    this.secaoService.listarSecoes(this.filtro).subscribe((resultado:any) => {
      //this.arraySecao = resultado;
      this.arraySecao = new MatTableDataSource(resultado);
      this.arraySecao = new MatTableDataSource<SecaoModel>(resultado);
      this.arraySecao = resultado['content'];
      this.arraySecao.paginator = this.paginator;
      this.arraySecao.sort = this.matSort;
      this.cdf.detectChanges();
      console.log(resultado);
      console.log(this.arraySecao);
    })
  }

  addSecao() {
    const dialogRef = this.dialog.open(SecaoCrudComponent, {
      width: '450px',
      // data: marcaModel === null ?  {
      //   descricaoMarca: null,
      //   fotoMarca: null} : marcaModel
    });
  }

  sair() {
     this.router.navigate(['/']);
  }
}
