import axios from "axios";
import { SERVER_URL, ROLL_NUMBER } from "../utils/constants";

export function serviceCall() {
  return axios.post(`${SERVER_URL}`);
}

export function callDummyAPI(name) {
  return axios.post(
    `${SERVER_URL}${ROLL_NUMBER}/dummy.do?`,
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: { name: name },
    }
  );
}

export async function fetchCustomerRecords(pageNo) {
  try {
    const response = await axios.get(
      `${SERVER_URL}${ROLL_NUMBER}/SQL/fetch?page=${pageNo}`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

export async function searchCustomerRecords(invoiceNo) {
  try {
    const response = await axios.get(
      `${SERVER_URL}${ROLL_NUMBER}/SQL/search?doc_id=${invoiceNo}`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

export function addCustomerRecords(data) {
  try {
    const response = axios.post(
      `${SERVER_URL}${ROLL_NUMBER}/SQL/add`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        params: { ...data },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function editCustomerRecords(data) {
  try {
    const response = axios.post(
      `${SERVER_URL}${ROLL_NUMBER}/SQL/edit`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        params: { ...data },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomerRecords(data) {
  try {
    const response = axios.post(
      `${SERVER_URL}${ROLL_NUMBER}/SQL/delete`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        params: { ...data },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function prediction(data) {
  return axios.post(
    "http://127.0.0.1:5000/predict?",
    {},
    {
      headers: { "Content-Type": "application/json" },
      params: {
        data: {
          id: "1806196",
          data: [
            {
              name_customer: "GORDO systems",
              total_open_amount: 58264.75,
              baseline_create_date: "2019-03-01",
              doc_id: 1928878819,
            },
            {
              name_customer: "WEIS foundation",
              total_open_amount: 86243.63,
              baseline_create_date: "2019-04-02",
              doc_id: 1928879803,
            },
            {
              name_customer: "KRAFT  llc",
              total_open_amount: 14001.15,
              baseline_create_date: "2019-05-03",
              doc_id: 1928879836,
            },
          ],
        },
      },
    }
  );
} //tried very hard to implement but it isnt working :(
