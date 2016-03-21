module Journal {
  export interface IEntry {
    title: string;
    body: string;
    voting: IVote;
    date: Date;
  }

  export interface IVote {
    upVote: number;
    downVote: number;
  }

  export class Entry implements IEntry {
    date: Date = new Date();
    voting: IVote = new Vote();
    constructor(public title: string, public body: string){  }
    getWordCount(): number {
      var bodyCount = this.body.split(' ');
      return bodyCount.length;
    }
  }

  export class Vote implements IVote {
    upVote: number = 0;
    downVote: number = 0;

  }


}
