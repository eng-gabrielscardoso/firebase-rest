import { Injectable } from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import * as firebase from 'firebase-admin';

@Injectable()
export class RecipientsService {
  private readonly databaseRef: FirebaseFirestore.Firestore =
    firebase.firestore();
  private readonly collectionRef: FirebaseFirestore.CollectionReference =
    this.databaseRef.collection('recipients');
  private readonly snapshot: Promise<FirebaseFirestore.QuerySnapshot> =
    this.collectionRef.get();

  async create(createRecipientDto: CreateRecipientDto): Promise<unknown> {
    return await this.collectionRef.add(createRecipientDto);
  }

  async findAll(): Promise<unknown> {
    return (await this.snapshot).docs.map((doc) => doc.data());
  }

  async findOne(id: string): Promise<unknown> {
    return await this.collectionRef.doc(id).get();
  }

  async update(
    id: string,
    updateRecipientDto: UpdateRecipientDto,
  ): Promise<unknown> {
    return await this.collectionRef.doc(id).update({ ...updateRecipientDto });
  }

  async remove(id: string): Promise<unknown> {
    return await this.collectionRef.doc(id).delete();
  }
}
