import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

class ApiService {
    private api: AxiosInstance

    constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
        this.api = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
                ...defaultHeaders, // Foydalanuvchi kiritgan default headers
            },
        })

        // Xatolarni ushlash uchun Interceptor
        this.api.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                console.error(
                    "API error:",
                    error.response?.data || error.message,
                )
                return Promise.reject(error)
            },
        )
    }

    async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
        const response = await this.api.get<T>(url, config)
        return response.data
    }

    async post<T>(
        url: string,
        data: any,
        config: AxiosRequestConfig = {},
    ): Promise<T> {
        const response = await this.api.post<T>(url, data, config)
        return response.data
    }

    async put<T>(
        url: string,
        data: any,
        config: AxiosRequestConfig = {},
    ): Promise<T> {
        const response = await this.api.put<T>(url, data, config)
        return response.data
    }

    async patch<T>(
        url: string,
        data: any,
        config: AxiosRequestConfig = {},
    ): Promise<T> {
        const response = await this.api.patch<T>(url, data, config)
        return response.data
    }

    async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
        const response = await this.api.delete<T>(url, config)
        return response.data
    }

    setHeader(name: string, value: string) {
        this.api.defaults.headers.common[name] = value
    }

    removeHeader(name: string) {
        delete this.api.defaults.headers.common[name]
    }
}

export default ApiService
