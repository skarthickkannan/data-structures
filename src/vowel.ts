class vowel {
  str: string;
  constructor(str: string) {
    this.str = str;
  }

  count() {
    let vowels: number = 0;
    for (let i = 0; i < this.str.length; i++) {
      if (
        this.str[i] === "a" ||
        this.str[i] === "e" ||
        this.str[i] === "i" ||
        this.str[i] === "o" ||
        this.str[i] === "u"
      ) {
        vowels++;
      }
    }
    return vowels;
  }
}

let v1 = new vowel("aaaeeiioou");

console.log(v1.count());
