export class RandomNumberGenerator {
  static randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomSleep(min: number, max: number) {
    return new Promise((resolve) =>
      setTimeout(resolve, this.randomNumber(min, max))
    );
  }
}
