import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor( private firestore: AngularFirestore ) { }

  public create(data){
    return this.firestore.collection('results').add(data);
  }


  public get(id=null){
    if(id){
      return this.firestore.collection('results').doc(id).valueChanges();
    }else{
      return this.firestore.collection('results').valueChanges();
    }
  }


  public updateResult(id, data){
    return this.firestore.collection('results').doc(id).set(data);
  }

}
