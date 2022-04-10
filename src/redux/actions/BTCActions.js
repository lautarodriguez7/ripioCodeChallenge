export const HISTORY_DATA = "HISTORY_DATA";

export const getHistoryData = (data) => ({
  type: HISTORY_DATA,
  payload: data,
});
