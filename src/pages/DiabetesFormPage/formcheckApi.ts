import { api, mlapi } from "../../api";
import type { PredictColomn } from "./formProps";

// types/predict.ts
export type PredictResponse = {
  success: boolean;
  message: string;
  recordId: string;
  timestamp: string;
  userId: string;

  inputData: {
    HbA1c_level: number;
    age: number;
    blood_glucose_level: number;
    bmi: number;
    gender: string;
    heart_disease: number;
    hypertension: number;
    smoking_history: string;
  };

  prediction: {
    result: number;
    resultText: string;
    confidence: number;
  };
};

export const predictHistory = (payload: PredictColomn) => {
  return mlapi.post<PredictResponse>("/predict-history", payload);
};

export const saveCheckHistory = (checkFormId: string) => {
  return api.patch(`/form-check-history/${checkFormId}/save`);
};
