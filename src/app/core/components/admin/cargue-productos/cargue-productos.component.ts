import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ToastService, UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import * as XLSX from 'xlsx';
import { ProductoCargueMasivo } from '../../../models/Admin/Admin';
import { ExcelService } from '../../../services/Comun/Excel/excel.service';
import { CargueProductosService } from '../../../services/Admin/cargue-productos.service';
import { Utils } from '../../../utils/Utils';
//import * as moment from 'moment'; 
@Component({
  selector: 'app-cargue-productos',
  templateUrl: './cargue-productos.component.html',
  styleUrls: ['./cargue-productos.component.scss']
})
export class CargueProductosComponent implements OnInit{
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  arrayBuffer: any;
  public readFile: Array<ProductoCargueMasivo> = new Array<ProductoCargueMasivo>();
  public loading = false;
  public results = false;
  @ViewChild("file", {}) file: ElementRef;
  @ViewChild('table') table: any;
  public loadedRows = 0;
  public errorRows = 0;
  public progressValue = 0;
  public processStarted = false;
  public cont: number = 0;
  public bandera: boolean = false;
  public curPage : number;
  public pageSize: number;
  constructor(
    private excelService: ExcelService, 
    private cargueProductosService: CargueProductosService) { 
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit(): void{
    this.curPage = 1;
    this.pageSize = 20;
  }

  showFiles(){
    let files = '';
    for(let i = 0; i < this.files.length; i++){
      files += this.files[i].name;
      if(!(this.files.length - 1 ===1 )){
        files += ', ';  
      }
    }
    return files+(files!=''&&this.readFile&&this.readFile.length?' - Total registros: ' + this.readFile.length: '');
  }

  
  numberOfPages(){
    return Math.ceil(this.readFile.length/this.pageSize);
  }

  async uploadFile(): Promise<void> {
    if (!this.readFile.length) {
      // this.toastService.warning("Primero seleccione o arrastre un archivo");
      return;
    }
    this.results = false;
    this.loadedRows = 0;
    this.errorRows = 0;
    let data: Array<Array<ProductoCargueMasivo>> = Utils.chunkArray(this.readFile, 200);
    let resultChunk: Array<ProductoCargueMasivo>;
    let index = 0;
    this.progressValue = 0;
    this.processStarted = true;
    for(const r of data){
      index++;
      await this.cargueProductosService.cargueMasivo(r).toPromise().then(d =>{
        if (d != null) {
          if (d && d["elementos"] && d["elementos"][0]) {
            resultChunk = d["elementos"][0];
            resultChunk.forEach(a => {
              let fa = this.readFile.findIndex(rf => rf.name == a.name);
              this.readFile[fa] = a;
            });
            let loaded = resultChunk.filter(x => x['registrado'] && x['registrado'] == '1');
            this.loadedRows += loaded.length;
            let error = resultChunk.filter(x => !x['registrado'] || x['registrado'] != '1');
            this.errorRows += error.length;
          }
        }
        this.progressValue = Math.round((index / data.length) * 100);
        if(this.progressValue==100)this.results = true;
      }).catch(error =>{

      });
    }
  }

  cancelUpload(id: string): void{
    this.uploadInput.emit({type: 'cancel', id: id});
  }

  onUploadOutput(output: UploadOutput | any): void{
    if(!this.processStarted){
      if(output.type === 'allAddedToQueue'){
      }else if(output.type === 'addedToQueue'){
          this.files = [];
          this.files.push(output.file); // add file to array when added
        } else if(output.type === 'uploading'){
          // update current data in files array for uploading file
          const index = this.files.findIndex(file => file.id === output.file.id);
          this.files[index] = output.file;
        } else if(output.type === 'removed'){
          // remove file from array when removed
          this.files = this.files.filter((file: UploadFile)=> file !== output.file);
        } else if(output.type === 'dragOver'){
          this.dragOver = true;
        } else if(output.type === 'dragOut'){
        } else if(output.type === 'drop'){
          this.dragOver = false;
        }
        this.showFiles();
        const fileReader = new FileReader();
        fileReader.onload = (e) =>{
          this.arrayBuffer = fileReader.result;
          const data = new Uint8Array(this.arrayBuffer);
          const arr = new Array();
          for(var i= 0; i !=data.length; i++) arr[i] = String.fromCharCode(data[i]);
          const bstr = arr.join('');
          const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true});
          const first_sheet_name = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[first_sheet_name];
          let fileContent = (XLSX.utils.sheet_to_json(worksheet, { raw: true, dateNF: 'DD/MM/YYYY'}));

          let newContent: ProductoCargueMasivo;
          this.readFile = new Array<ProductoCargueMasivo>();

          this.readFile = fileContent.map((r,i)=>{
            return {
              referen: (i+1).toString(),
              name: r['nombre'],
              price: r['precio'],
              description: r['descripcion'],
              image: r['imagen'],
              dataCurrent:  r['fecha_Actualizacion'],
              dataLoading: r['fecha_Cargue']
            }
          });
          this.loading = false;
        }
        this.loading = true;
        fileReader.readAsArrayBuffer(this.files[0].nativeFile);
    }else {
      // this.toastServicce.warning("hay un proceso en curso, espere que finalize o limpie el formulario.");
    }

  }

  downloadResults(){
    try {
      if(this.readFile.length){
        let exportArray: Array<ProductoCargueMasivo>;
        exportArray = this.readFile.map(element =>{
          element['registrado']= element['registrad']? 'Sí': 'No';
          return element;
        });
        this.excelService.exportAsExcelFile(exportArray, 'ProductoResultadoCargueMasivo')
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearFile(){
    this.results = false;
    this.readFile = new Array<ProductoCargueMasivo>();
    this.file.nativeElement.value = "";
    this.files = [];
    this.processStarted = false;
    this.progressValue = 0;
    this.curPage = 1;
    this.pageSize = 20;
    window.location.reload();
  }

  toPage(i){
    if(i!=null)this.curPage = this.curPage + 1
  }

  verifiacarEvent(){
    alert("prueba");
  }
}
