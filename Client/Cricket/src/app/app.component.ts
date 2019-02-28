import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cricket';
  time:any;
  player_list=[];
  api="http://localhost:3000";
  constructor(private http:HttpClient){
this.get()
this.fetch_all()
  }
fetch_all(){
  this.player_list.length=0;
  this.http.get(this.api+'/list').subscribe(data=>{
    let x:any;
    x=data;
    x.forEach(i=>{
      this.player_list.push(i)
    })
  })
}
  get(){
  this.http.get(this.api+'/time').subscribe(err=>{
    console.log(err);
     
  },res=>{
  })
  }
  add(no,name,rank){
if(no!=0 && name.trim()!='' && rank!=0){
  let data={}; 
  data['JERSY']=Number(no);
  data['NAME']=name;
  data['RANK']=Number(rank);
  this.http.post(this.api+'/add',data).subscribe(err=>{
    console.log(err);
    
  },res=>{
    console.log(res);
    
    this.fetch_all()
  
  })
}

  }

  delete(jno){
if(jno!=0){
  let data={}; 
  data['JERSY']=Number(jno);
  this.http.post(this.api+'/delete',data).subscribe(err=>{
    console.log(err);
    
  },res=>{ 
    this.fetch_all()
  
  })
}
  }

  update(no,name,rank){
  if(no!=0 && name.trim()!='' && rank!=0){
    let data={}; 
    data['JERSY']=Number(no);
    data['NAME']=name;
    data['RANK']=Number(rank);
    this.http.post(this.api+'/update',data).subscribe(err=>{
      console.log(err);
      
    },res=>{
      this.fetch_all()
    
    })
  }
  }

  drop(){
    this.http.get(this.api+'/clear').subscribe(err=>{
      console.log(err);
      
    },res=>{
      this.fetch_all()
    
    })
  }
  ngOnInit(){
    setInterval(()=>{
        this.time=Date().substr(0,24)      
    },1000)
  }

}

