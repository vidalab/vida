class DisplayFormatter {
  public static formatKMG(value: number): string {
    if (value < 1000) {
      return value + "";
    } else if (value >= Math.pow(10, 3) && value < Math.pow(10, 6)) {
      return value / Math.pow(10, 3) + "k";
    } else if (value >= Math.pow(10, 6) && value < Math.pow(10, 9)) {
      return value / Math.pow(10, 6) + "m";
    } else if (value >= Math.pow(10, 9)) {
      return value / Math.pow(10, 9) + "g";
    }
  }
}

export default DisplayFormatter