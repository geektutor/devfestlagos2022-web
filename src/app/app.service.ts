import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appRef: any;
  constructor(private db: AngularFirestore) {
    // this.appRef = db.collection()
  }

  getAllSponsors(collectionPath: string): any {
    return this.db.collection(collectionPath);
  }

  getAllSpeakers(collectionPath: string): any {
    return this.db.collection(collectionPath);
  }

  getAllSession(collectionPath: string): any {
    return this.db.collection(collectionPath);
  }
}
