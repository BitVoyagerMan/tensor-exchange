class HttpError extends Error {
    info: any; // Replace 'any' with the type of your JSON response if known
    status: number;
  
    constructor(message?: string, info?: any, status?: number) {
      super(message); // Pass the message up to the Error constructor
  
      // Maintains proper stack trace (only available in V8 i.e., Node.js & Chrome)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpError);
      }
  
      this.name = 'HttpError';
  
      this.info = info;
      this.status = status;
    }
}
export const fetcher = async url => {
    const token = localStorage.getItem('token');
    const headers = {
  
    };
    if(token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(url, {
      headers: headers
    })
  
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      if(res.status == 401) {
        window.location.href = '/login';
      }
      const error:HttpError = new HttpError('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
  
    return res.json()
  }