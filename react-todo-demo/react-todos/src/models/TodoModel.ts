class TodoModel {
     rowNumber: number;
     rowDescription: string;
     rowAssigned: string;

     constructor(rowNumber: string, rowDescription: string, rowAssigned: string) {
          this.rowNumber = rowNumber;
          this.rowDescription = rowDescription;
          this.rowAssigned = rowAssigned;
     }
}