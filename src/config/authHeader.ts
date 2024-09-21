type Token = string | null;

export function authHeader(): { Authorization?: string } {
  const token: Token = localStorage.getItem("token");
  
  if (token) {
    try {
      const parsedToken = JSON.parse(token);
      if (parsedToken) {
        return { Authorization: `Bearer ${parsedToken}` };
      }
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }
  return {};
}
