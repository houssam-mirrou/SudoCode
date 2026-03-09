import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../api/axios";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(localStorage.getItem("auth_token") || null);
  const router = useRouter();
  const login = async (credentials: object) => {
    try {
      const response = await api.post("/login", credentials);
      token.value = response.data.token;
      user.value = response.data.user;
      if (token.value) {
        localStorage.setItem("auth_token", token.value);
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed: ", error);
      throw error;
    }
  };
  const register = async (credentials: object) => {
    try {
      const response = await api.post("/register", credentials);
      router.push("/login");
    } catch (error) {
      console.error("Registration failed: ", error);
      throw error;
    }
  };
  const logout = async () => {
    try {
      const response = await api.post("/logout");
      router.push("/");
    } catch (error) {
      console.error("Logout failed");
    } finally {
      user.value = null;
      token.value = null;
      localStorage.removeItem("auth_token");
      router.push("/");
    }
  };

  const fetchUser = async () => {
    if (!token.value) {
      return;
    }
    try {
      const response = await api.get("/user");
      console.log("Data from Laravel:", response.data);
      user.value = response.data;
    } catch (error) {
      console.error("Failed to fetch user, token might be expired:", error);
      user.value = null;
      token.value = null;
      localStorage.removeItem("auth_token");
    }
  };
  return { user, token, login, register, logout, fetchUser };
});
