import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import * as firebase from 'firebase-admin';

@Injectable()
export class EmployeesService {
  private collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('employees');

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.collectionRef.add(createEmployeeDto);
  }

  async findAll() {
    const snapshot = await this.collectionRef.get();
    return snapshot.docs.map((doc) => doc.data());
  }

  async findOne(employeeId: string) {
    return await this.collectionRef.doc(employeeId).get();
  }

  async update(employeeId: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.collectionRef
      .doc(employeeId)
      .update({ ...updateEmployeeDto });
  }

  async remove(employeeId: string) {
    return await this.collectionRef.doc(employeeId).delete();
  }
}
