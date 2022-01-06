import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CorModel } from 'src/app/models/cor.model';
import { CorCrudComponent } from '../cor-crud/cor-crud.component';
import { CorService } from '../cor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cor-lista',
  templateUrl: './cor-lista.component.html',
  styleUrls: ['./cor-lista.component.css']
})
export class CorListaComponent implements OnInit, AfterViewInit {

  listaCor: CorModel[] = [];
  displayedColumns = ['idCor', 'descricaoCor', 'actions']
  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private corService: CorService,
              private dialog: MatDialog,
              private toastr: ToastrService,
              private router: Router) { }


  ngAfterViewInit(): void {
    // this.dataSource.sort = this.matSort;
    // this.dataSource.data = this.listaCor;
    // this.dataSource.connect().next(this.listaCor);
    // this.paginator._changePageSize(this.paginator.pageSize);
  }

  ngOnInit(): void {
    this.listaCores();
  }


  listaCores() {
     this.corService.getAll().subscribe((lista:any) => {
      //  this.dataSource = new MatTableDataSource(lista);
      //  this.dataSource.paginator = this.paginator;
      //  this.dataSource.sort = this.matSort;
      this.dataSource = new MatTableDataSource(lista);
      this.dataSource.connect().next(lista);
      this.paginator._changePageSize(this.paginator.pageSize);
      this.dataSource.sort = this.matSort;
       this.listaCor = lista['content'];
       console.log(this.dataSource);
       console.log(lista);
       console.log(this.listaCor);
     })
  }

  addCor() {
    const dialogRef = this.dialog.open(CorCrudComponent, {
      width: '400px',
      // data: marcaModel === null ?  {
      //   descricaoMarca: null,
      //   fotoMarca: null} : marcaModel
    });
  }
  sair() {
    this.router.navigate(['/']);
 }

}
