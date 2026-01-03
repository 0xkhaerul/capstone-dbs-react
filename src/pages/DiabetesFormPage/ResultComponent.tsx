import type { PredictResponse } from "./formcheckApi";
import { saveCheckHistory } from "./formcheckApi";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../utils/decodeToken";
import { useEffect } from "react";

type ResultComponentProps = {
  result: PredictResponse;
};

export default function ResultComponent({ result }: ResultComponentProps) {
  const navigate = useNavigate();
  const { inputData, prediction, recordId, timestamp } = result;

  // Format timestamp
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Determine risk level and styling
  const isPositive = prediction.result === 1;
  const riskLevel = isPositive ? "High Risk" : "Low Risk";
  const riskMessage = isPositive
    ? "Based on your input data, you have a high risk of diabetes. Please consult with a healthcare professional for further evaluation."
    : "Based on your input data, you have a low risk of diabetes. Continue maintaining a healthy lifestyle";

  const handleSave = () => {
    const user = decodeToken();

    if (!user) {
      return navigate("/login");
    }

    saveCheckHistory(result.recordId);
  };

  return (
    <div id="result-section" className="mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Assessment Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Input Data
            </h3>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <ul className="space-y-3">
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium capitalize text-gray-800">
                    {String(inputData?.gender || "-")}
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.age || "-"} years
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Hypertension:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.hypertension === 1 ? "Yes" : "No"}
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Heart Disease:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.heart_disease === 1 ? "Yes" : "No"}
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">BMI:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.bmi || "-"}
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Blood Glucose:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.blood_glucose_level || "-"} mg/dL
                  </span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">HbA1c Level:</span>
                  <span className="font-medium text-gray-800">
                    {inputData?.HbA1c_level || "-"}%
                  </span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="text-gray-600">Smoking History:</span>
                  <span className="font-medium capitalize text-gray-800">
                    {String(inputData?.smoking_history || "-")}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Diagnosis
            </h3>
            <div className="space-y-4">
              {isPositive ? (
                <div className="p-5 rounded-xl bg-red-50 border border-red-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-red-800">
                      {riskLevel}
                    </h4>
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800 border border-red-300 capitalize">
                      {prediction.resultText}
                    </span>
                  </div>
                  <p className="text-red-700 mb-3">{riskMessage}</p>
                  <div className="mt-2 pt-3 border-t border-red-100">
                    <p className="text-sm text-red-600">
                      <span className="font-medium">Confidence:</span>{" "}
                      {(prediction.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-green-50 border border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-green-800">
                      {riskLevel}
                    </h4>
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-300 capitalize">
                      {prediction.resultText}
                    </span>
                  </div>
                  <p className="text-green-700 mb-3">{riskMessage}</p>
                  <div className="mt-2 pt-3 border-t border-green-100">
                    <p className="text-sm text-green-600">
                      <span className="font-medium">Confidence:</span>{" "}
                      {(prediction.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              )}

              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="mb-1">
                  <span className="font-medium">Assessment ID:</span>{" "}
                  {recordId.substring(0, 8).toUpperCase()}
                </p>
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {formatDate(timestamp)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black flex justify-between">
          <div></div>
          <button
            onClick={handleSave}
            className="border border-blue-500 bg-blue-500 rounded-md px-4 py-2 text-white"
          >
            Simpan Riwayat
          </button>
        </div>
        {/* Resources Section */}
        <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
          <h4 className="text-xl font-semibold text-red-800 mb-5 flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Informasi Penting tentang Diabetes
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-red-700 mb-2">
                  📚 Panduan Pengelolaan Diabetes:
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.alodokter.com/diabetes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Panduan Lengkap Diabetes - Alodokter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.halodoc.com/kesehatan/diabetes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Informasi Diabetes Lengkap - Halodoc
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-red-700 mb-2">
                  ⚠️ Bahaya dan Komplikasi:
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://hellosehat.com/diabetes/komplikasi-diabetes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Bahaya Komplikasi Diabetes - Hello Sehat
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-red-700 mb-2">
                  🔍 Penyebab dan Faktor Risiko:
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://hellosehat.com/diabetes/diabetes-tipe-1/penyebab-diabetes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Penyebab dan Faktor Risiko - Hello Sehat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-red-700 mb-2">
                  👁️ Retinopati Diabetik:
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.alodokter.com/retinopati-diabetik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Retinopati Diabetik - Alodokter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hellosehat.com/diabetes/komplikasi-diabetes/retinopati-diabetik/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline hover:no-underline"
                    >
                      Retinopati Diabetik: Gejala & Pengobatan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <p className="text-sm text-yellow-900 font-medium text-center">
              💡 <strong>Penting:</strong> Informasi di atas hanya sebagai
              referensi. Selalu konsultasikan dengan dokter spesialis untuk
              diagnosis dan pengobatan yang tepat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
