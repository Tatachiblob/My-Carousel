var sharedInstance = null;

class MessageHolder{

  constructor(){
    this.data = [];
    this.data.push("Stonehenge, England");
    this.data.push("An Evening Journey by Evgeny Lushpin");
    this.data.push("Moraine Lake, Canada");
    this.data.push("Golden Gate Bridge, San Francisco, California");
    this.ctr = 0;
    sharedInstance = this;
  }

  static getInstance(){
    if(sharedInstance == null){
      sharedInstance = new MessageHolder();
    }

    return sharedInstance;
  }

  add(message){
    this.data.push(message);
  }

  get(){
    return this.data[this.ctr];
  }

  getSize(){
    return this.data.length;
  }

  next(){
    if(this.ctr < this.data.length - 1){
      this.ctr = this.ctr + 1;
    }
  }

  previous(){
    if(this.data.length > 0){
      this.ctr = this.ctr - 1;
    }
  }

  getLast(){
    return this.data[this.data.length - 1];
  }

  getCtr(){
    return this.ctr;
  }

}
