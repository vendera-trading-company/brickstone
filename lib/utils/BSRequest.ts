import axios from "axios";
import BSResponse from "./BSResponse";
import LoadingOverlay from "./LoadingOverlay";

interface BSRequestConfig {
  redirect?: BSRequestConfigRedirect;
}

interface BSRequestConfigRedirect {
  target: string;
  features: string | undefined;
}

class BSRequest {
  static async post(
    url: string,
    data = null,
    component: any,
    config = {
      loadingOverlay: {
        open: true,
        close: true,
      },
      redirect: {
        target: "_self",
        features: undefined,
      },
    }
  ) {
    try {
      if (config.loadingOverlay?.open ?? true) {
        LoadingOverlay.open();
      }

      const response = await axios.post(url, data);

      if (!response) {
        return new BSResponse({
          status: "error",
        });
      }

      if (!response.data) {
        return new BSResponse({
          status: "error",
        });
      }

      const responseData = response.data.data ?? [];

      if (response.data.status != "done") {
        return new BSResponse({
          status: "error",
          data: responseData,
        });
      }

      const redirect = response.data.redirect ?? null;

      var bsResponse = new BSResponse({
        status: response.data.status,
        data: responseData,
        redirect: redirect,
      });

      if (
        redirect &&
        (config.redirect ?? {
          target: "_self",
          features: undefined,
        })
      ) {
        bsResponse.redirect(
          config.redirect.target ?? "_self",
          config.redirect.features
        );
      }

      return bsResponse;
    } catch (e) {
      console.log(e);
    }

    return new BSResponse({
      status: "error",
    });
  }
}

export default BSRequest;
