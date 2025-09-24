export const BASE_URL = "https://money-manager-cbp2.onrender.com/api/v1.0";

const CLOUDINARY_CLOUD_NAME = "dixnhc2vb";

export const API_ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  GET_USER_INFO: "/profile",
  GET_ALL_CATEGORIES: "/categories",
  ADD_CATEGORY: "/categories",
  UPDATE_CATEGORY: (categoryId) => `/categories/${categoryId}`,
  GET_ALL_INCOMES: "/incomes",
  UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};
