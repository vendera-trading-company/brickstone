interface BSResponseData {
  status: string;
  data?: any;
  redirect?: string | URL | undefined;
}

class BSResponse {
  response: BSResponseData;

  constructor(response: BSResponseData) {
    this.response = response;
  }

  static error(response: BSResponseData) {
    return new BSResponse({
      status: "error",
      data: response.data,
      redirect: response.redirect,
    });
  }

  static done(response: BSResponseData) {
    return new BSResponse({
      status: "done",
      data: response.data,
      redirect: response.redirect,
    });
  }

  ok() {
    return this.response.status == "done";
  }

  data(key = null) {
    if (!this.response.data) {
      return null;
    }

    if (!key) {
      return this.response.data;
    }

    return this.response.data[key] ?? null;
  }

  redirect(target = "_self", features = undefined) {
    const tmp = this.response.redirect;

    if (!tmp) {
      return;
    }

    return window.open(tmp, target, features);
  }
}

export default BSResponse;
