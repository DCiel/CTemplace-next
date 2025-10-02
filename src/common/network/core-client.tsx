import axios, { type AxiosInstance } from "axios";

class CoreClient {
	core_backend: AxiosInstance;
	constructor() {
		this.core_backend = axios.create({
			baseURL: process.env.BASE_URL,
		});

		this.#init();
	}

	#get_token() {
		return localStorage.getItem("token");
	}

	#init() {
		const token = this.#get_token();
		this.core_backend.interceptors.request.use((config) => {
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});

		this.core_backend.interceptors.response.use((response) => {
			return response;
		});
	}
}

export const CORE_CLIENT_BACKEND = new CoreClient();
