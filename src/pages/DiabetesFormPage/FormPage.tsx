import { useState } from "react";
import type { PredictColomn } from "./formProps";
import { predictHistory } from "./formcheckApi";
import ResultComponent from "./ResultComponent";
import type { PredictResponse } from "./formcheckApi";
import { useEffect } from "react";
import { decodeToken } from "../../utils/decodeToken";

// src/pages/DiabetesFormPage.jsx
export function DiabetesFormPage() {
  const [result, setResult] = useState<PredictResponse | null>(() => {
    const saved = localStorage.getItem("predict_result");
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    hypertension: "",
    heart_disease: "",
    bmi: "",
    blood_glucose_level: "",
    HbA1c_level: "",
    smoking_history: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    if (result) {
      localStorage.setItem("predict_result", JSON.stringify(result));
    }
  }, [result]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const user = decodeToken();

    const userId = user ? user.userId : null;

    const payload: PredictColomn = {
      hypertension: Number(form.hypertension),
      heart_disease: Number(form.heart_disease),
      bmi: Number(form.bmi),
      blood_glucose_level: Number(form.blood_glucose_level),
      HbA1c_level: Number(form.HbA1c_level),
      smoking_history: form.smoking_history,
      gender: form.gender,
      age: Number(form.age),
      ...(userId ? { user_id: userId } : {}),
    };

    try {
      const res = await predictHistory(payload);
      setResult(res.data);
      setError(null);
    } catch (err: any) {
      console.error("API Error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Gagal memanggil API";
      setError(errorMessage);
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F8FE]">
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Peringatan untuk Check Retina */}
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm text-center">
          ⚠️ Fitur "Check Retina" sedang tidak tersedia untuk sementara waktu.
        </div>

        <div className="flex gap-2 mb-6">
          <div className="border border-blue-300 rounded-md p-4 flex-1 flex justify-center items-center cursor-pointer hover:bg-blue-50 transition-colors bg-blue-50">
            <span className="font-medium text-blue-700">Form Check</span>
          </div>

          <div className="border border-gray-300 rounded-md p-4 flex-1 flex justify-center items-center cursor-not-allowed bg-gray-100">
            <span className="font-medium text-gray-500">Check Retina</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Diabetes Risk Assessment
          </h1>
          <p className="text-gray-600 mb-8">
            Fill out the form to assess your risk of diabetes.
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              <div className="flex items-center">
                <span className="mr-2">❌</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="hypertension"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Hypertension
                </label>
                <select
                  id="hypertension"
                  name="hypertension"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  required
                  defaultValue=""
                  value={form.hypertension}
                  onChange={handleChange}
                >
                  <option value="" disabled className="text-gray-500">
                    Select option
                  </option>
                  <option value="1" className="text-gray-800">
                    Yes
                  </option>
                  <option value="0" className="text-gray-800">
                    No
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="heart_disease"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Heart Disease
                </label>
                <select
                  id="heart_disease"
                  name="heart_disease"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  value={form.heart_disease}
                  onChange={handleChange}
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">
                    Select option
                  </option>
                  <option value="1" className="text-gray-800">
                    Yes
                  </option>
                  <option value="0" className="text-gray-800">
                    No
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="bmi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  BMI
                </label>
                <input
                  type="number"
                  id="bmi"
                  name="bmi"
                  step="0.1"
                  value={form.bmi}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  placeholder="e.g. 28.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="blood_glucose_level"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Blood Glucose Level (mg/dL)
                </label>
                <input
                  type="number"
                  id="blood_glucose_level"
                  name="blood_glucose_level"
                  value={form.blood_glucose_level}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  placeholder="e.g. 150"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="HbA1c_level"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  HbA1c Level (%)
                </label>
                <input
                  type="number"
                  id="HbA1c_level"
                  name="HbA1c_level"
                  step="0.1"
                  value={form.HbA1c_level}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  placeholder="e.g. 6.2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="smoking_history"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Smoking History
                </label>
                <select
                  id="smoking_history"
                  name="smoking_history"
                  value={form.smoking_history}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">
                    Select option
                  </option>
                  <option value="never" className="text-gray-800">
                    Never
                  </option>
                  <option value="former" className="text-gray-800">
                    Former
                  </option>
                  <option value="current" className="text-gray-800">
                    Current
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">
                    Select gender
                  </option>
                  <option value="male" className="text-gray-800">
                    Male
                  </option>
                  <option value="female" className="text-gray-800">
                    Female
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  placeholder="e.g. 45"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
        {result && <ResultComponent result={result} />}
      </section>
    </div>
  );
}
