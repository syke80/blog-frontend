export class Photo {
  filename: string;
  timestamp: Date;

  constructor(filename: string, timestamp: Date) {
    this.filename = filename;
    this.timestamp = timestamp;
  }
}
