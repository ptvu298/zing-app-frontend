export default class Headers {
  static getHeaders = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  static getHeadersText = () => {
    return {
      "Content-Type": "text/plain",
    };
  };
}
