import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { NewdesenhoPage } from './newdesenho.page';

// @Injectable()
export class ContactProvider {
 
  constructor(private db: AngularFireDatabase) {
  }
// describe('NewdesenhoPage', () => {
//   let component: NewdesenhoPage;
//   let fixture: ComponentFixture<NewdesenhoPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewdesenhoPage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewdesenhoPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

 
  getAll() {
    // return this.db.list(this.PATH, ref => ref.orderByChild('name'))
    //   .snapshotChanges()
    //   .map(changes => {
    //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //   })
  }
 
  get(key: string) {
    // return this.db.object(this.PATH + key).snapshotChanges()
    //   .map(c => {
    //     return { key: c.key, ...c.payload.val() };
    //   });
  }
  
  remove(key: string) {
    // return this.db.list(this.PATH).remove(key);
  }
  
  save(contact: any) {
    return new Promise((resolve, reject) => {
    //   // if (contact.key) {
    //   //   this.db.list(this.PATH)
    //   //     .update(contact.key, { name: contact.name, tel: contact.tel })
    //   //     .then(() => resolve())
    //   //     .catch((e) => reject(e));
    //   // } else {
        this.db.list('desenhos').push({ name:'teste', tel: 'bola'}).then(() => resolve());
    })
  }
}
  

