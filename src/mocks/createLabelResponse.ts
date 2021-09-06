export const createLabelResponse = {
  data: {
    id: "18110",
    type: "labels",
    attributes: {
      created_at: "2021-09-05T18:25:20.384-05:00",
      updated_at: "2021-09-05T18:25:20.384-05:00",
      status: null,
      tracking_number: "794661987020",
      tracking_status: null,
      label_url:
        "https://shipkraken-demo.s3.amazonaws.com/uploads/label/label_file/a569a2b4-c21e-4100-a643-47176d4606bc.pdf",
      tracking_url_provider:
        "https://www.fedex.com/apps/fedextrack/?action=track&trackingnumber=794661987020",
      rate_id: 492404,
    },
  },
};

export const createLabelStatusErrorResponse = {
  data: {
    id: "18110",
    type: "labels",
    attributes: {
      created_at: "2021-09-05T18:25:20.384-05:00",
      updated_at: "2021-09-05T18:25:20.384-05:00",
      status: "ERROR",
      error_message: [{ message: "Guia mal formada" }],
      tracking_number: null,
      tracking_status: null,
      label_url: null,
      tracking_url_provider: null,
      rate_id: 492404,
    },
  },
};

export const createLabelErrorResponse = new Error("Unexpected error");
