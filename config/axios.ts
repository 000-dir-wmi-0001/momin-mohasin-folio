type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions extends RequestInit {
  timeout?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchClient<T>(
  endpoint: string,
  method: HttpMethod = "GET",
  body?: unknown,
  options: FetchOptions = {}
): Promise<T> {
  const controller = new AbortController();
  const timeout = options.timeout ?? 10000;

  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    // Add token ONLY on client
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      ...options,
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null);
      throw {
        status: res.status,
        message: errorBody?.message || res.statusText,
      };
    }

    return (await res.json()) as T;
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("Fetch timeout");
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}

export default fetchClient;
