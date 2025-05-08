
/**
 * API client utility for making network requests
 */

type RequestOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

export async function apiGet<T>(
  url: string, 
  options: RequestOptions = {}
): Promise<T> {
  try {
    // Build URL with query parameters if they exist
    const urlObj = new URL(url);
    
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        urlObj.searchParams.append(key, value);
      });
    }
    
    // Make the API call
    const response = await fetch(urlObj.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    // Parse and return the JSON response
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

export async function apiPost<T>(
  url: string, 
  data: Record<string, any>, 
  options: RequestOptions = {}
): Promise<T> {
  try {
    // Make the API call
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    // Parse and return the JSON response
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}
